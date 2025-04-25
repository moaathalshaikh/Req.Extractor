'use client';

import React, {useState, useCallback, useRef} from 'react';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {toast} from "@/hooks/use-toast"
import {useRouter} from 'next/navigation';
import {FileUp, Trash2, Download} from 'lucide-react';
import {extractRequirements} from '@/ai/flows/extract-requirements';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"

type FileFormat = 'txt' | 'csv';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [requirements, setRequirements] = useState<any>([]);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExtractRequirements = useCallback(async () => {
    try {
      const extracted = await extractRequirements({text: inputText});
      setRequirements(extracted.requirements);
      toast({
        title: "Requirements Extracted",
        description: "Successfully extracted requirements from the text.",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Extraction Failed",
        description: error.message || "Failed to extract requirements.",
      })
    }
  }, [inputText]);

  const handleClearText = () => {
    setInputText('');
    setRequirements([]);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setInputText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleDownloadRequirements = (format: FileFormat) => {
    if (requirements.length === 0) {
      toast({
        title: "No Requirements to Download",
        description: "Please extract requirements first.",
      });
      return;
    }

    let text = '';
    if (format === 'txt') {
      text = requirements.map((req: any) => `ID: ${req.id}\nType: ${req.type}\nDescription: ${req.description}`).join('\n\n');
    } else if (format === 'csv') {
      // CSV format: id,type,description
      text = "id,type,description\n" + requirements.map((req: any) => `"${req.id}","${req.type}","${req.description}"`).join('\n');
    }

    const blob = new Blob([text], {type: format === 'txt' ? 'text/plain' : 'text/csv'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `extracted_requirements.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Separate functional and non-functional requirements
  const functionalRequirements = requirements.filter((req: any) => req.type === 'functional');
  const nonFunctionalRequirements = requirements.filter((req: any) => req.type === 'non-functional');

  // Separate numbering for functional and non-functional requirements
  const numberedFunctionalRequirements = functionalRequirements.map((req: any, index: number) => ({
    ...req,
    id: index + 1,
  }));

  const numberedNonFunctionalRequirements = nonFunctionalRequirements.map((req: any, index: number) => ({
    ...req,
    id: index + 1,
  }));


  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen">
      {/* Input Area */}
      <div className="flex flex-col gap-2 mt-4">
        <Input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="hidden"
          ref={fileInputRef}
          id="file-upload"
        />
        <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
          <FileUp className="mr-2 h-4 w-4"/>
          Upload .txt File
        </Button>

        <Textarea
          placeholder="Paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="bg-card"
        />
        <div className="flex justify-between">
          <Button onClick={handleExtractRequirements} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Extract Requirements
          </Button>
          <Button variant="destructive" onClick={handleClearText}>
            <Trash2 className="mr-2 h-4 w-4"/>
            Clear
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleDownloadRequirements('txt')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Download className="h-4 w-4"/>
            Download Requirements (.txt)
          </Button>
          <Button
            onClick={() => handleDownloadRequirements('csv')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Download className="h-4 w-4"/>
            Download Requirements (.csv)
          </Button>
        </div>
      </div>

      {/* Requirements Display */}
      <div className="mt-8 flex-grow">
        <h2 className="text-xl font-semibold mb-4">Extracted Requirements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Functional Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Functional Requirements</h3>
            {numberedFunctionalRequirements.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {numberedFunctionalRequirements.map((req: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{req.id}</TableCell>
                      <TableCell>{req.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-muted-foreground">No functional requirements extracted.</p>
            )}
          </div>

          {/* Non-Functional Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Non-Functional Requirements</h3>
            {numberedNonFunctionalRequirements.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {numberedNonFunctionalRequirements.map((req: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{req.id}</TableCell>
                      <TableCell>{req.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-muted-foreground">No non-functional requirements extracted.</p>
            )}
          </div>
        </div>

        {/* Display message if no requirements extracted */}
        {requirements.length === 0 && (
          <p className="text-muted-foreground">No requirements extracted yet.</p>
        )}
      </div>

      {/* Footer with "About Us" and "Tutorial Guide" links */}
      <footer className="mt-4 py-2 border-t flex justify-between items-center text-sm text-muted-foreground">
        <a href="/about" className="hover:underline" onClick={() => {
          router.push('/about');
        }}>About Us</a>
        <div className="text-center">
          Developed by <a href="https://github.com/moaathalshaikh" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Moaath ALSHAIKH</a>
        </div>
        <a href="/tutorial" className="hover:underline" onClick={() => {
          router.push('/tutorial');
        }}>Tutorial Guide</a>
      </footer>
    </div>
  );
}

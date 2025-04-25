'use server';
/**
 * @fileOverview Extracts functional and non-functional requirements from text using GenAI.
 *
 * - extractRequirements - A function that handles the requirement extraction process.
 * - ExtractRequirementsInput - The input type for the extractRequirements function.
 * - ExtractRequirementsOutput - The return type for the extractRequirements function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ExtractRequirementsInputSchema = z.object({
  text: z.string().describe('The text to extract requirements from.'),
});
export type ExtractRequirementsInput = z.infer<typeof ExtractRequirementsInputSchema>;

const RequirementSchema = z.object({
  id: z.number().describe('Unique identifier for the requirement.'),
  type: z.enum(['functional', 'non-functional']).describe('The type of requirement.'),
  description: z.string().describe('The description of the requirement.'),
});

const ExtractRequirementsOutputSchema = z.object({
  requirements: z.array(RequirementSchema).describe('The extracted requirements.'),
});
export type ExtractRequirementsOutput = z.infer<typeof ExtractRequirementsOutputSchema>;

export async function extractRequirements(input: ExtractRequirementsInput): Promise<ExtractRequirementsOutput> {
  return extractRequirementsFlow(input);
}

const requirementExtractionPrompt = ai.definePrompt({
  name: 'requirementExtractionPrompt',
  input: {
    schema: z.object({
      text: z.string().describe('The text to extract requirements from.'),
    }),
  },
  output: {
    schema: z.object({
      requirements: z.array(RequirementSchema).describe('The extracted requirements.'),
    }),
  },
  prompt: `You are a software engineering expert. Extract functional and non-functional requirements from the following text. Each requirement must have a unique ID.\n\nText: {{{text}}}\n\nFormat your response as a JSON array of requirements. Each requirement should have a unique id, a type (functional or non-functional) and a description.\n\nExample:\n[{
  "id": 1,
  "type": "functional",
  "description": "The system should allow users to log in with their username and password."
}, {
  "id": 2,
  "type": "non-functional",
  "description": "The system should be responsive and load pages in under 3 seconds."
}]`,
});

const extractRequirementsFlow = ai.defineFlow<
  typeof ExtractRequirementsInputSchema,
  typeof ExtractRequirementsOutputSchema
>({
  name: 'extractRequirementsFlow',
  inputSchema: ExtractRequirementsInputSchema,
  outputSchema: ExtractRequirementsOutputSchema,
}, async input => {
  const {output} = await requirementExtractionPrompt(input);
  return output!;
});

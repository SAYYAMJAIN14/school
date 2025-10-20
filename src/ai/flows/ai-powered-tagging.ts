'use server';

/**
 * @fileOverview An AI-powered tagging tool for suggesting student tags in photos.
 *
 * - aiTagging - A function that handles the AI-powered tagging process.
 * - AiTaggingInput - The input type for the aiTagging function.
 * - AiTaggingOutput - The return type for the aiTagging function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTaggingInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo containing students, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});

export type AiTaggingInput = z.infer<typeof AiTaggingInputSchema>;

const AiTaggingOutputSchema = z.object({
  suggestedTags: z
    .array(z.string())
    .describe('An array of suggested student tags for the photo.'),
});

export type AiTaggingOutput = z.infer<typeof AiTaggingOutputSchema>;

export async function aiTagging(input: AiTaggingInput): Promise<AiTaggingOutput> {
  return aiTaggingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTaggingPrompt',
  input: {schema: AiTaggingInputSchema},
  output: {schema: AiTaggingOutputSchema},
  prompt: `You are an AI assistant designed to identify students in school photos and suggest tags for them.

  Analyze the provided photo and identify potential students present in the image. Generate a list of suggested tags based on the identified students.

  Photo: {{media url=photoDataUri}}
  \n  Return the suggested tags as a list of names.
  If you cannot identify students in the photo, return an empty list.
  `,
});

const aiTaggingFlow = ai.defineFlow(
  {
    name: 'aiTaggingFlow',
    inputSchema: AiTaggingInputSchema,
    outputSchema: AiTaggingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

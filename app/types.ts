export interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
}
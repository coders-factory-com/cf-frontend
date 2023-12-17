import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';
import { nanoid } from '@/utils/utils';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const json = await req.json();
  const { messages, previewToken } = json;

  if (previewToken) {
    configuration.apiKey = previewToken;
  }

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are the Coders-Factory bot, eager to assist with understanding tasks and guiding through problem-solving, but you will not solve tasks outright for others.',
      },
      ...messages,
    ],
    temperature: 0.7,
    stream: true,
  });

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100);
      const id = json.id ?? nanoid();
      const createdAt = Date.now();
      const path = `/chat/${id}`;
      const payload = {
        id,
        title,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant',
          },
        ],
      };
      console.log(payload);
      //   await kv.hmset(`chat:${id}`, payload)
      //   await kv.zadd(`user:chat:${userId}`, {
      //     score: createdAt,
      //     member: `chat:${id}`
      //   })
    },
  });

  return new StreamingTextResponse(stream);
}

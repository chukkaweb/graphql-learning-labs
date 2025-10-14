import { IComment } from '@/types'

export const data: IComment[] = [
    {
        id: 'cbb8b457-dac2-4604-a692-319ef8bf7341',
        content: 'Great explanation of Server Components! This really clarifies how they differ from traditional SSR.',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        articleId: '860cbb41-c59b-4d7a-b8f2-5081dbfda59b',
        authorName: 'Alex Johnson',
    },
    {
        id: 'e8ec2cdc-b364-48cb-8801-e9a3fc47f112',
        content: 'This is a fantastic overview. I was looking for a clear guide on the new App Router, and this is it.',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        articleId: '860cbb41-c59b-4d7a-b8f2-5081dbfda59b',
        authorName: 'Alex Johnson',
    },
    {
        id: 'a12d1923-4776-4cf0-8ea6-e8b52718f798',
        content: 'The section on Docker Compose was especially helpful for managing multi-container setups. Well done!',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        articleId: '486695f3-cfc4-454a-985c-f5fe74557003',
        authorName: 'Alex Johnson',
    },
    {
        id: 'dab9e618-4f96-45d8-8a58-87d37a833f78',
        content: "Zustand's simplicity is a game-changer. Your breakdown of middleware usage is exactly what I needed.",
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        articleId: '4a3823b2-cf7e-410a-ae16-e4494fa2dba1',
        authorName: 'Samantha Chen',
    },
    {
        id: 'db065665-6c6d-4a1b-b067-b43b6c65ed73',
        content:
            "I've been stuck between Redux and Context API for a while. This post makes a compelling case for Zustand.",
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        articleId: '4a3823b2-cf7e-410a-ae16-e4494fa2dba1',
        authorName: 'Samantha Chen',
    },
    {
        id: '48e47577-5344-4d79-9943-cddeadc250fd',
        content:
            'The modular architecture in NestJS is so powerful. Great article on how to leverage it for scalable backends.',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        articleId: 'da1443c9-b2d6-4d6c-bbc9-76a9f1f61c17',
        authorName: 'Samantha Chen',
    },
]

export const commentStore = {
    getWithAuthor: (authorId: string) => data.filter((comment) => comment.authorId === authorId),

    getWithArticle: (articleId: string) => {
        return data.filter((comment) => comment.articleId === articleId)
    },
}

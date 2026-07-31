import OpenAI from "openai"

const client=new OpenAI({

apiKey:process.env.OPENAI_API_KEY

})

export default async function handler(req,res){

try{

const completion=await client.chat.completions.create({

model:"gpt-4.1-mini",

messages:[

{

role:"user",

content:`Summarize this in 2-3 sentences:

${req.body.content}`

}

]

})

res.status(200).json({

summary:completion.choices[0].message.content

})

}

catch(error){

res.status(500).json({

summary:"Error generating summary"

})

}

}
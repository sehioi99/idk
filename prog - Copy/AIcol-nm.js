const aiList = [
  /* ===== CHATBOTS ===== */
  {
    name: "ChatGPT",
    url: "https://openai.com/chatgpt/",
    logo: "🤖",
    stars: 10,
    category: "Chatbot",
    pricing: "free-trial",
    description: "ChatGPT is a top-tier AI assistant that feels polished and flexible. In the Chatbot category, it earns a perfect 10/10, and its free-trial access makes it easy to test before paying."
  },
  {
    name: "Claude",
    url: "https://www.anthropic.com/claude",
    logo: "🧠",
    stars: 9,
    category: "Chatbot",
    pricing: "free",
    description: "Claude is a sharp, thoughtful assistant that handles long prompts and structured work really well. It sits in the Chatbot category, scores a strong 9/10, and is available for free use."
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com/",
    logo: "✨",
    stars: 8,
    category: "Chatbot",
    pricing: "free",
    description: "Gemini is a capable all-round assistant with solid multimodal skills and everyday usefulness. In the Chatbot category, it lands at a very good 8/10 and stays free to use."
  },
  {
    name: "Microsoft Copilot",
    url: "https://copilot.microsoft.com/",
    logo: "🔍",
    stars: 7,
    category: "Chatbot",
    pricing: "free",
    description: "Microsoft Copilot is a practical assistant for quick answers, summaries, and general help. It belongs in the Chatbot category, holds a good 7/10, and is free to access."
  },
  {
    name: "Grok",
    url: "https://grok.x.ai/",
    logo: "🚀",
    stars: 7,
    category: "Chatbot",
    pricing: "free",
    description: "Grok is a direct, fast-moving chatbot built for current conversations and a punchier style. In the Chatbot category, it earns a good 7/10 and is free to use."
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    logo: "🔎",
    stars: 8,
    category: "Research",
    pricing: "free",
    description: "Perplexity is a research-focused assistant that mixes search with AI responses in a useful way. In the Research category, it scores a strong 8/10 and is free to use."
  },
  {
    name: "Meta AI",
    url: "https://ai.meta.com/",
    logo: "🧿",
    stars: 6,
    category: "Chatbot",
    pricing: "free",
    description: "Meta AI is a decent assistant for quick answers and light content generation inside Meta’s ecosystem. It belongs in the Chatbot category, sits at 6/10, and is free."
  },
  {
    name: "DeepSeek",
    url: "https://www.deepseek.com/",
    logo: "🧬",
    stars: 8,
    category: "Chatbot",
    pricing: "free",
    description: "DeepSeek is a strong reasoning assistant that punches above its weight on coding and logic. In the Chatbot category, it rates 8/10 and is free to use."
  },
  {
    name: "Pi AI",
    url: "https://pi.ai/",
    logo: "🧘",
    stars: 5,
    category: "Chatbot",
    pricing: "free",
    description: "Pi AI is a friendly conversational assistant with a softer, more supportive tone. It’s in the Chatbot category, lands at 5/10, and is free."
  },
  {
    name: "Poe",
    url: "https://poe.com/",
    logo: "🦉",
    stars: 7,
    category: "Chatbot",
    pricing: "free",
    description: "Poe is a platform for trying multiple AI models from one place without much friction. It belongs in the Chatbot category, scores 7/10, and is free to use."
  },
  {
    name: "Character.AI",
    url: "https://character.ai/",
    logo: "🎭",
    stars: 7,
    category: "Chatbot",
    pricing: "free",
    description: "Character.AI is built for personality-driven chats and creative character interaction. In the Chatbot category, it earns a good 7/10 and is free."
  },
  {
    name: "Replika",
    url: "https://replika.ai/",
    logo: "🤝",
    stars: 4,
    category: "Chatbot",
    pricing: "free",
    description: "Replika is a companion-style chatbot that leans more toward casual conversation than serious work. It sits in the Chatbot category, gets a 4/10, and is free."
  },
  {
    name: "YouChat",
    url: "https://you.com/",
    logo: "💬",
    stars: 6,
    category: "Chatbot",
    pricing: "free",
    description: "YouChat is a search-connected assistant that answers questions in a straightforward way. It belongs in the Chatbot category, scores 6/10, and is free."
  },
  {
    name: "Kimi AI",
    url: "https://kimi.moonshot.cn/",
    logo: "🌙",
    stars: 7,
    category: "Chatbot",
    pricing: "free",
    description: "Kimi AI is especially useful when long documents or long context are involved. In the Chatbot category, it earns a solid 7/10 and is free to use."
  },
  {
    name: "Doubao",
    url: "https://www.doubao.com/",
    logo: "🧃",
    stars: 6,
    category: "Chatbot",
    pricing: "free",
    description: "Doubao is a general chatbot with content generation and everyday utility features. It sits in the Chatbot category, scores 6/10, and is free."
  },
  {
    name: "Janitor AI",
    url: "https://janitorai.com/",
    logo: "🧹",
    stars: 5,
    category: "Chatbot",
    pricing: "free",
    description: "Janitor AI is more about custom characters and roleplay-style interaction than heavy productivity. It belongs in the Chatbot category, lands at 5/10, and is free."
  },
  {
    name: "Nano GPT",
    url: "https://www.nanogpt.com/",
    logo: "🧠",
    stars: 7,
    category: "Chatbot",
    pricing: "free",
    description: "Nano GPT is a nimble chatbot that keeps things quick and lightweight. In the Chatbot category, it scores 7/10 and is free to use."
  },
  {
    name: "Le Chat",
    url: "https://chat.mistral.ai/",
    logo: "🌊",
    stars: 6,
    category: "Chatbot",
    pricing: "free",
    description: "Le Chat is Mistral’s conversational assistant for general help and exploration. It belongs in the Chatbot category, lands at 6/10, and is free."
  },
  {
    name: "Open Assistant",
    url: "https://open-assistant.io/",
    logo: "🛠️",
    stars: 2,
    category: "Chatbot",
    pricing: "free",
    description: "Open Assistant is an open community project that feels rougher than the top assistants. In the Chatbot category, it gets a low 2/10 and is free."
  },

  /* ===== IMAGE ===== */
  {
    name: "MidJourney",
    url: "https://www.midjourney.com/",
    logo: "🌌",
    stars: 10,
    category: "Image",
    pricing: "paid",
    description: "MidJourney is a standout image generator with strong artistic quality and detail. In the Image category, it earns a perfect 10/10 and is a paid tool."
  },
  {
    name: "DALL·E",
    url: "https://openai.com/dall-e/",
    logo: "🎨",
    stars: 9,
    category: "Image",
    pricing: "paid",
    description: "DALL·E is a polished text-to-image model with strong creative output and clean results. It sits in the Image category, scores 9/10, and is paid."
  },
  {
    name: "Stable Diffusion",
    url: "https://stability.ai/",
    logo: "⚡",
    stars: 8,
    category: "Image",
    pricing: "free",
    description: "Stable Diffusion is a flexible open model with a huge community and lots of customization. In the Image category, it gets 8/10 and is free."
  },
  {
    name: "Leonardo AI",
    url: "https://leonardo.ai/",
    logo: "🎭",
    stars: 7,
    category: "Image",
    pricing: "free",
    description: "Leonardo AI is a strong choice for game art, concept visuals, and asset-style generation. It belongs in the Image category, scores 7/10, and is free."
  },
  {
    name: "Ideogram",
    url: "https://ideogram.ai/",
    logo: "🔤",
    stars: 8,
    category: "Image",
    pricing: "free",
    description: "Ideogram is especially good when readable text inside images matters. In the Image category, it earns 8/10 and is free."
  },
  {
    name: "NightCafe",
    url: "https://nightcafe.studio/",
    logo: "🌙",
    stars: 6,
    category: "Image",
    pricing: "free",
    description: "NightCafe is a community-oriented image generator with plenty of style variety. It sits in the Image category, gets 6/10, and is free."
  },
  {
    name: "Playground AI",
    url: "https://playgroundai.com/",
    logo: "🎠",
    stars: 6,
    category: "Image",
    pricing: "free",
    description: "Playground AI is a beginner-friendly image tool that keeps creation simple. In the Image category, it scores 6/10 and is free."
  },
  {
    name: "Krea AI",
    url: "https://www.krea.ai/",
    logo: "🖌️",
    stars: 6,
    category: "Image",
    pricing: "free",
    description: "Krea AI is useful for fast visual iteration and quick creative ideas. It belongs in the Image category, lands at 6/10, and is free."
  },
  {
    name: "Recraft",
    url: "https://www.recraft.ai/",
    logo: "🧩",
    stars: 5,
    category: "Image",
    pricing: "free",
    description: "Recraft leans toward vector-style design and graphic-friendly output. In the Image category, it scores 5/10 and is free."
  },
  {
    name: "Clipdrop",
    url: "https://clipdrop.co/",
    logo: "📸",
    stars: 7,
    category: "Image",
    pricing: "free",
    description: "Clipdrop is a handy toolkit for cleanup, enhancement, and background removal. It sits in the Image category, gets 7/10, and is free."
  },
  {
    name: "Remove.bg",
    url: "https://remove.bg/",
    logo: "🪄",
    stars: 8,
    category: "Image",
    pricing: "free",
    description: "Remove.bg does one job very well: removing backgrounds fast and cleanly. In the Image category, it earns 8/10 and is free."
  },
  {
    name: "Cleanup.pictures",
    url: "https://cleanup.pictures/",
    logo: "🧹",
    stars: 7,
    category: "Image",
    pricing: "free",
    description: "Cleanup.pictures is useful when you need to erase unwanted objects from photos. It belongs in the Image category, scores 7/10, and is free."
  },
  {
    name: "DreamStudio",
    url: "https://beta.dreamstudio.ai/",
    logo: "🌈",
    stars: 7,
    category: "Image",
    pricing: "free-trial",
    description: "DreamStudio is the official Stable Diffusion interface for flexible image creation. In the Image category, it gets 7/10 and offers free-trial access."
  },
  {
    name: "RunDiffusion",
    url: "https://rundiffusion.com/",
    logo: "⚡",
    stars: 6,
    category: "Image",
    pricing: "free",
    description: "RunDiffusion gives you an online setup for generating art with Stable Diffusion models. It sits in the Image category, scores 6/10, and is free."
  },
  {
    name: "Hotpot AI",
    url: "https://hotpot.ai/",
    logo: "🔥",
    stars: 5,
    category: "Image",
    pricing: "free",
    description: "Hotpot AI is a practical image and design helper for casual editing and restoration. In the Image category, it earns 5/10 and is free."
  },
  {
    name: "Photosonic",
    url: "https://photosonic.writesonic.com/",
    logo: "🖼️",
    stars: 6,
    category: "Image",
    pricing: "free-trial",
    description: "Photosonic focuses on quick text-to-image generation for concepts and marketing visuals. It belongs in the Image category, scores 6/10, and offers free-trial access."
  },
  {
    name: "Artbreeder",
    url: "https://www.artbreeder.com/",
    logo: "🧬",
    stars: 4,
    category: "Image",
    pricing: "free",
    description: "Artbreeder is more about blending and evolving images than producing top-tier results. In the Image category, it gets a 4/10 and is free."
  },
  {
    name: "DeepAI Image Generator",
    url: "https://deepai.org/machine-learning-model/text2img",
    logo: "🎨",
    stars: 1,
    category: "Image",
    pricing: "free",
    description: "DeepAI Image Generator is very basic and feels dated compared with newer tools. It sits in the Image category, gets a 1/10, and is free."
  },
  {
    name: "Craiyon",
    url: "https://www.craiyon.com/",
    logo: "🖼️",
    stars: 2,
    category: "Image",
    pricing: "free",
    description: "Craiyon is a rough, low-end image generator that works for simple experiments only. In the Image category, it scores 2/10 and is free."
  },
  {
    name: "Fotor AI",
    url: "https://www.fotor.com/features/ai-image-generator/",
    logo: "🖌️",
    stars: 5,
    category: "Image",
    pricing: "free",
    description: "Fotor AI mixes image generation with editing features in a simple package. It belongs in the Image category, lands at 5/10, and is free."
  },
  {
    name: "Nano Banana",
    url: "https://www.nano-banana.com/",
    logo: "🍌",
    stars: 5,
    category: "Image",
    pricing: "pay-per-use",
    description: "Nano Banana is a practical image editor for product shots and quick visual cleanup. In the Image category, it sits at 5/10 and uses pay-per-use pricing."
  },

  /* ===== VIDEO ===== */
  {
    name: "Runway",
    url: "https://runwayml.com/",
    logo: "🎬",
    stars: 9,
    category: "Video",
    pricing: "free-trial",
    description: "Runway is a serious video creation platform with strong generation and editing tools. In the Video category, it scores 9/10 and offers a free trial."
  },
  {
    name: "Sora",
    url: "https://sora.openai.com/",
    logo: "🌊",
    stars: 9,
    category: "Video",
    pricing: "paid",
    description: "Sora is a high-end text-to-video tool with impressive realism and motion quality. It belongs in the Video category, gets 9/10, and is paid."
  },
  {
    name: "Pika",
    url: "https://pika.art/",
    logo: "🎞️",
    stars: 6,
    category: "Video",
    pricing: "free-trial",
    description: "Pika is a simple way to make short AI videos and motion ideas. In the Video category, it scores 6/10 and offers a free trial."
  },
  {
    name: "Synthesia",
    url: "https://www.synthesia.io/",
    logo: "👤",
    stars: 7,
    category: "Video",
    pricing: "paid",
    description: "Synthesia is best known for avatar-led training and presentation videos. It sits in the Video category, gets 7/10, and is paid."
  },
  {
    name: "HeyGen",
    url: "https://www.heygen.com/",
    logo: "🧑",
    stars: 7,
    category: "Video",
    pricing: "paid",
    description: "HeyGen focuses on avatar videos and fast automated video production. In the Video category, it earns 7/10 and is paid."
  },
  {
    name: "CapCut AI",
    url: "https://www.capcut.com/",
    logo: "🎞️",
    stars: 7,
    category: "Video",
    pricing: "free",
    description: "CapCut AI adds editing automation, subtitles, and quick social video tools. It belongs in the Video category, scores 7/10, and is free."
  },
  {
    name: "Lumen5",
    url: "https://lumen5.com/",
    logo: "🎬",
    stars: 6,
    category: "Video",
    pricing: "free-trial",
    description: "Lumen5 is built for turning articles and scripts into short promotional videos. In the Video category, it gets 6/10 and offers a free trial."
  },
  {
    name: "Wisecut",
    url: "https://www.wisecut.video/",
    logo: "✂️",
    stars: 6,
    category: "Video",
    pricing: "free-trial",
    description: "Wisecut automates silence removal, captions, and basic editing tasks. It sits in the Video category, scores 6/10, and offers a free trial."
  },
  {
    name: "Veed.io",
    url: "https://www.veed.io/ai",
    logo: "🎥",
    stars: 7,
    category: "Video",
    pricing: "free-trial",
    description: "Veed.io is a practical AI-assisted editor for subtitles, transcription, and fast publishing. In the Video category, it earns 7/10 and offers a free trial."
  },

  /* ===== AUDIO / VOICE ===== */
  {
    name: "Suno AI",
    url: "https://suno.ai/",
    logo: "🎶",
    stars: 10,
    category: "Audio",
    pricing: "free",
    description: "Suno AI is excellent at turning prompts into full songs with vocals and instruments. In the Audio category, it earns a perfect 10/10 and is free."
  },
  {
    name: "Udio",
    url: "https://udio.com/",
    logo: "🎧",
    stars: 7,
    category: "Audio",
    pricing: "free",
    description: "Udio is a solid music generation tool for making songs and compositions from prompts. It belongs in the Audio category, scores 7/10, and is free."
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/",
    logo: "🔊",
    stars: 9,
    category: "Voice",
    pricing: "free",
    description: "ElevenLabs is one of the best voice tools for lifelike narration and voiceovers. In the Voice category, it gets 9/10 and is free."
  },
  {
    name: "Murf",
    url: "https://murf.ai/",
    logo: "🎙️",
    stars: 8,
    category: "Voice",
    pricing: "free-trial",
    description: "Murf is a strong voiceover tool with natural delivery and studio-style output. It sits in the Voice category, scores 8/10, and offers a free trial."
  },
  {
    name: "Descript",
    url: "https://www.descript.com/",
    logo: "📝",
    stars: 8,
    category: "Voice",
    pricing: "free-trial",
    description: "Descript is great for editing audio, transcribing speech, and handling podcast workflows. In the Voice category, it earns 8/10 and offers a free trial."
  },
  {
    name: "Resemble AI",
    url: "https://www.resemble.ai/",
    logo: "🗣️",
    stars: 7,
    category: "Voice",
    pricing: "paid",
    description: "Resemble AI focuses on voice cloning and expressive text-to-speech. It belongs in the Voice category, scores 7/10, and is paid."
  },
  {
    name: "Play.ht",
    url: "https://play.ht/",
    logo: "🔊",
    stars: 8,
    category: "Voice",
    pricing: "free-trial",
    description: "Play.ht is a strong text-to-speech tool with natural voices and multilingual support. In the Voice category, it gets 8/10 and offers a free trial."
  },
  {
    name: "Replica Studios",
    url: "https://replicastudios.com/",
    logo: "🗣️",
    stars: 7,
    category: "Voice",
    pricing: "free-trial",
    description: "Replica Studios is built for realistic voice performances in games and media. It sits in the Voice category, scores 7/10, and offers a free trial."
  },
  {
    name: "Lovo AI",
    url: "https://www.lovo.ai/",
    logo: "🎙️",
    stars: 7,
    category: "Voice",
    pricing: "free-trial",
    description: "Lovo AI is a useful voice generation tool for narration, commercials, and audiobooks. In the Voice category, it earns 7/10 and offers a free trial."
  },

  /* ===== CODE ===== */
  {
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    logo: "💻",
    stars: 9,
    category: "Code",
    pricing: "paid",
    description: "GitHub Copilot is a powerful coding assistant that suggests code as you type. In the Code category, it scores 9/10 and is paid."
  },
  {
    name: "Cursor",
    url: "https://cursor.sh/",
    logo: "🧑‍💻",
    stars: 9,
    category: "Code",
    pricing: "free-trial",
    description: "Cursor is an AI-first editor that makes coding, refactoring, and debugging feel smoother. It belongs in the Code category, gets 9/10, and offers a free trial."
  },
  {
    name: "Codeium",
    url: "https://codeium.com/",
    logo: "⚙️",
    stars: 7,
    category: "Code",
    pricing: "free",
    description: "Codeium is a free coding assistant with autocomplete and chat help. In the Code category, it earns 7/10 and is free."
  },
  {
    name: "Tabnine",
    url: "https://www.tabnine.com/",
    logo: "⌨️",
    stars: 7,
    category: "Code",
    pricing: "free",
    description: "Tabnine is a practical code completion assistant for many languages and editors. It sits in the Code category, scores 7/10, and is free."
  },
  {
    name: "Amazon CodeWhisperer",
    url: "https://aws.amazon.com/codewhisperer/",
    logo: "🛠️",
    stars: 7,
    category: "Code",
    pricing: "free-trial",
    description: "Amazon CodeWhisperer helps with code suggestions and secure coding workflows. In the Code category, it gets 7/10 and offers a free trial."
  },
  {
    name: "Codium AI",
    url: "https://www.codium.ai/",
    logo: "⚙️",
    stars: 5,
    category: "Code",
    pricing: "free",
    description: "Codium AI is useful for testing, review, and repetitive coding support. It belongs in the Code category, lands at 5/10, and is free."
  },
  {
    name: "Mutable AI",
    url: "https://mutable.ai/",
    logo: "🧩",
    stars: 4,
    category: "Code",
    pricing: "free-trial",
    description: "Mutable AI is more of a helper for boilerplate and collaboration than a standout coder. In the Code category, it scores 4/10 and offers a free trial."
  },
  {
    name: "CodePal",
    url: "https://codepal.ai/",
    logo: "🔧",
    stars: 3,
    category: "Code",
    pricing: "free",
    description: "CodePal is a basic coding helper that feels limited compared with stronger tools. It sits in the Code category, gets 3/10, and is free."
  },

  /* ===== PRODUCTIVITY ===== */
  {
    name: "Notion AI",
    url: "https://www.notion.so/product/ai",
    logo: "📓",
    stars: 7,
    category: "Productivity",
    pricing: "paid",
    description: "Notion AI helps write, summarize, and organize work inside Notion. In the Productivity category, it scores 7/10 and is paid."
  },
  {
    name: "Otter AI",
    url: "https://otter.ai/",
    logo: "🦦",
    stars: 7,
    category: "Productivity",
    pricing: "free",
    description: "Otter AI is built for live transcription and fast meeting summaries. It belongs in the Productivity category, gets 7/10, and is free."
  },
  {
    name: "Fireflies AI",
    url: "https://fireflies.ai/",
    logo: "🔥",
    stars: 7,
    category: "Productivity",
    pricing: "free",
    description: "Fireflies AI records meetings and turns them into clean summaries and action items. In the Productivity category, it earns 7/10 and is free."
  },
  {
    name: "Cogram",
    url: "https://www.cogram.com/",
    logo: "💻",
    stars: 6,
    category: "Productivity",
    pricing: "free-trial",
    description: "Cogram is handy for note-taking, documentation, and technical meeting support. It sits in the Productivity category, scores 6/10, and offers a free trial."
  },
  {
    name: "Laxis",
    url: "https://www.laxis.ai/",
    logo: "🗒️",
    stars: 6,
    category: "Productivity",
    pricing: "free-trial",
    description: "Laxis turns meetings into summaries and action items with decent reliability. In the Productivity category, it gets 6/10 and offers a free trial."
  },
  {
    name: "Mem AI",
    url: "https://mem.ai/",
    logo: "📌",
    stars: 6,
    category: "Productivity",
    pricing: "free-trial",
    description: "Mem AI focuses on organizing notes and making knowledge easier to retrieve. It belongs in the Productivity category, scores 6/10, and offers a free trial."
  },

  /* ===== DESIGN ===== */
  {
    name: "Canva AI",
    url: "https://www.canva.com/",
    logo: "🎨",
    stars: 8,
    category: "Design",
    pricing: "free",
    description: "Canva AI adds useful generative tools to an already easy design platform. In the Design category, it scores 8/10 and is free."
  },
  {
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    logo: "🔥",
    stars: 8,
    category: "Design",
    pricing: "paid",
    description: "Adobe Firefly brings AI generation into Adobe’s creative workflow in a polished way. It sits in the Design category, gets 8/10, and is paid."
  },

  /* ===== WRITING ===== */
  {
    name: "Peppertype.ai",
    url: "https://www.peppertype.ai/",
    logo: "✍️",
    stars: 5,
    category: "Writing",
    pricing: "free-trial",
    description: "Peppertype.ai can draft content and marketing copy, but it is not especially strong. In the Writing category, it scores 5/10 and offers a free trial."
  },
  {
    name: "Simplified AI",
    url: "https://simplified.com/ai",
    logo: "📄",
    stars: 6,
    category: "Writing",
    pricing: "free-trial",
    description: "Simplified AI helps with writing, design, and social content in one place. It belongs in the Writing category, gets 6/10, and offers a free trial."
  },
  {
    name: "Anyword",
    url: "https://anyword.com/",
    logo: "📃",
    stars: 6,
    category: "Writing",
    pricing: "free-trial",
    description: "Anyword is aimed at marketing copy and performance-focused writing. In the Writing category, it scores 6/10 and offers a free trial."
  },
  {
    name: "Scalenut",
    url: "https://www.scalenut.com/",
    logo: "📝",
    stars: 6,
    category: "Writing",
    pricing: "free-trial",
    description: "Scalenut blends AI writing with SEO-oriented content creation. It sits in the Writing category, gets 6/10, and offers a free trial."
  }
];

// --- DOM Elements ---
const container = document.getElementById("aiContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const pricingSelect = document.getElementById("pricingSelect");
const ratingSelect = document.getElementById("ratingSelect");
const sortRatingsBtn = document.getElementById("sortRatingsBtn");

// --- Populate Category Dropdown ---
const categories = Array.from(new Set(aiList.map(ai => ai.category))).sort();
categories.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categorySelect.appendChild(option);
});

// --- Sorting Toggle ---
let sortDescending = true;
sortRatingsBtn.addEventListener("click", () => {
  sortDescending = !sortDescending;
  sortRatingsBtn.textContent = sortDescending ? "Sort by Ratings ↓" : "Sort by Ratings ↑";
  applyFilters();
});

// --- Apply Filters Function ---
function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;
  const selectedPricing = pricingSelect.value;
  const selectedRating = ratingSelect.value;

  container.innerHTML = "";

  let filteredAIs = aiList.filter(ai => {
    const matchesSearch = ai.name.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === "All" || ai.category === selectedCategory;
    const matchesPricing = selectedPricing === "All" || ai.pricing === selectedPricing;
    const matchesRating = selectedRating === "All" || ai.stars === parseInt(selectedRating);
    return matchesSearch && matchesCategory && matchesPricing && matchesRating;
  });

  // --- Sort by Ratings ---
  filteredAIs.sort((a, b) => sortDescending ? b.stars - a.stars : a.stars - b.stars);

  filteredAIs.forEach(ai => {
    const card = document.createElement("div");
    card.className = "ai-card";

    const pricingLabel = ai.pricing === "free" ? "FREE" : ai.pricing === "free-trial" ? "TRIAL" : "PAID";
    const pricingClass = `pricing-${ai.pricing}`;

    card.innerHTML = `
      <div class="pricing-badge ${pricingClass}">${pricingLabel}</div>
      <div style="font-size: 3rem; margin: 0.5rem 0;">${ai.logo}</div>
      <h3>${ai.name}</h3>
      <p class="ai-card-description">${ai.description}</p>
      <div class="orbit-container"></div>
    `;

    const orbitContainer = card.querySelector(".orbit-container");

    for (let i = 0; i < ai.stars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.classList.add(`star-rating-${ai.stars}`);

      const randomX = Math.random() * 80 + 10;
      const randomY = Math.random() * 80 + 10;

      star.style.left = `${randomX}%`;
      star.style.top = `${randomY}%`;

      const starSize = 8 + Math.random() * 6;
      star.style.width = `${starSize}px`;
      star.style.height = `${starSize}px`;
      star.style.transform = "translate(-50%, -50%)";

      star.style.animationDuration = `${2 + Math.random() * 2}s, ${5 + Math.random() * 3}s`;
      star.style.animationDelay = `${i * 0.3}s, ${-i * 0.5}s`;

      orbitContainer.appendChild(star);
    }

    card.addEventListener("click", () => window.open(ai.url, "_blank"));
    container.appendChild(card);
  });
}

// --- Event Listeners ---
searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);
pricingSelect.addEventListener("change", applyFilters);
ratingSelect.addEventListener("change", applyFilters);

// --- Initial Render ---
applyFilters();

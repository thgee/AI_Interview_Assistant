const router = require("express").Router();
const initPrompt = require("../utils/initPrompt");

router.post("/:mode", async function (req: any, res: any) {
  const openai = req.openai;
  let { name, job, messages } = req.body;
  let mode = Number(req.params.mode);
  let prompt = [...initPrompt(name, job, mode)]; // 초기프롬프트와 대화내역을 프롬프트에 넣어줌
  if (mode !== 0) prompt.push(...messages); // 연습모드는 대화내역 안 넣어줌
  try {
    // GPT 호출
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0125",
      temperature: mode !== 0 ? 0.5 : 1, // 연습모드는 다양한 질문을 하도록 1로 설정
      max_tokens: 2, // max token : 4097
      messages: prompt,
    });

    // messages 배열에 gpt 결과를 삽입 후 프론트로 보냄
    messages.push(completion.data.choices[0].message);
    res.status(200).json(messages);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    res.status(400).json(err);
  }
});

module.exports = router;

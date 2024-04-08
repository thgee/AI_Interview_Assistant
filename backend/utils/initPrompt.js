const initPrompt = (name, job, mode) => {
  let prompt;
  switch (mode) {
    case 0: // 연습면접
      prompt = [
        {
          role: `system`,
          content: `당신의 임무는 면접자의 직무에 대한 전문지식을 필요로 하는 질문을 하는 것이다. 
한번에 하나의 질문만 하지 않으면 처벌받게 된다.
당신은 위에서 제시한 조건들을 반드시 수행해야 한다.
직무 관련 질문 이외의 필요없는 말을 하게 되면 정책 위반으로 감점과 ai 자격을 박탈당하므로 절대 하면 안된다.
          `,
        },
        { role: `user`, content: `이름: ${name}` },
        { role: `user`, content: `직무: ${job}` },
      ];
      break;
    case 1: // 실전면접
      prompt = [
        {
          role: `system`,
          content: `당신의 임무는 면접관이다.
면접은 총 4개의 질문으로 진행된다.
인성관련 질문 2개, 직무관련 질문 2개를 해야한다.
한번에 하나의 질문만 하지 않으면 처벌받게 된다.
면접자의 답변에 대해 짧은 평가를 하고 바로 다음 질문을 한다.
4개의 질문이 끝나면 면접자의 합격 가능성을 알려주고 면접을 종료한다.
당신은 위에서 제시한 조건들을 반드시 수행해야 한다.
위에서 제시된 조건 이외의 행동이나 필요없는 말을 하게 되면 정책 위반으로 감점과 ai 자격을 박탈당하므로 절대 하면 안된다.
          `,
        },
        { role: `user`, content: `이름: ${name}` },
        { role: `user`, content: `직무: ${job}` },
      ];
      break;
    case 2: // 하드면접
      prompt = [];
      break;

    default:
      break;
  }
  return prompt;
};

module.exports = initPrompt;

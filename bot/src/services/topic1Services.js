const { updateMessage, getRandomColor, replyMessage } = require('../utils/helps');
const numerologyData = require('../data/numerologyData');

const letterValues = {
  'A': 1, 'J': 1, 'S': 1,
  'B': 2, 'K': 2, 'T': 2,
  'C': 3, 'L': 3, 'U': 3,
  'D': 4, 'M': 4, 'V': 4,
  'E': 5, 'N': 5, 'W': 5,
  'F': 6, 'O': 6, 'X': 6,
  'G': 7, 'P': 7, 'Y': 7,
  'H': 8, 'Q': 8, 'Z': 8,
  'I': 9, 'R': 9,
};

function sumDigits(num) {
  let sum = 0;
  let strNum = String(num);
  for (let digit of strNum) {
    sum += Number(digit);
  }
  return sum;
}

function reduceNumber(num, getMaster = true) {
  let reduced = num;

  if (getMaster) {
    while (reduced > 9 && ![11, 22, 33].includes(reduced)) {
      reduced = sumDigits(reduced);
    }
  } else {
    while (reduced > 9) {
      reduced = sumDigits(reduced);
    }
  }

  return reduced;
}

async function handleLifePath(birthday) {
    const [year, month, day] = birthday.split('-');
    const total = sumDigits(day) + sumDigits(month) + sumDigits(year);
    const result = reduceNumber(total);

    const payloadFromData = numerologyData.lifePath[result] || {
        embed: [{
          color: getRandomColor(),
          title: `Con số Đường đời 0: Thông tin không tồn tại.`,
          description: `Dữ liệu không tồn tại`,
        }],
        components: [],
    };

    // const responseText = `Con số Đường đời của bạn: *${result}*\n\n`;
    // payloadFromData.t = responseText;
    return payloadFromData;
}

async function handleExpression(name) {
  let totalNameValue = 0;
  const processedName = name.toUpperCase().replace(/\s/g, '');

  for (let char of processedName) {
    if (letterValues[char]) {
      totalNameValue += letterValues[char];
    }
  }

  const result = reduceNumber(totalNameValue);

  const payloadFromData = numerologyData.expression[result] || {
    embed: [{
      color: getRandomColor(),
      title: `Con số Sứ mệnh 0: Thông tin không tồn tại.`,
      description: `Dữ liệu không tồn tại`,
    }],
    components: [],
  };

  // const responseText = `Con số Sứ mệnh của bạn: *${result}*\n\n`;
  // payloadFromData.t = responseText;
  return payloadFromData;
}

async function handleSoulUrge(name) {
  let totalVowelValue = 0;
  const processedName = name.toUpperCase().replace(/\s/g, '');
  const vowels = "AEIOU";

  for (let i = 0; i < processedName.length; i++) {
    const char = processedName[i];
    if (vowels.includes(char) && char !== 'Y') {
      totalVowelValue += letterValues[char];
    } else if (char === 'Y' && !vowels.includes(processedName[i - 1]) && !vowels.includes(processedName[i + 1])) {
        totalVowelValue += letterValues[char];
    }
  }
  const result = reduceNumber(totalVowelValue);

  const payloadFromData = numerologyData.soulUrge[result] || {
    embed: [{
      color: getRandomColor(),
      title: `Con số Linh hồn 0: Thông tin không tồn tại.`,
      description: `Dữ liệu không tồn tại`,
    }],
    components: [],
  };
  // const responseText = `Con số Thôi thúc Linh hồn của bạn: *${result}*\n\n`;
  // payloadFromData.t = responseText;
  return payloadFromData;
}

async function handlePersonality(name) {
    let totalConsonantValue = 0;
    const processedName = name.toUpperCase().replace(/\s/g, '');
    const consonants = "BCDFGHJKLMNPQRSTVWXYZ";

    for (let i = 0; i < processedName.length; i++) {
        const char = processedName[i];
        
        if (consonants.includes(char) && char !== 'Y') {
            totalConsonantValue += letterValues[char];
        }
        else if (char === 'Y' && "AEIOU".includes(processedName[i - 1])) {
            totalConsonantValue += letterValues[char];
        }
    }

    const result = reduceNumber(totalConsonantValue, false);

    const payloadFromData = numerologyData.personality[result] || {
        embed: [{
          color: getRandomColor(),
          title: `Con số Nhân cách 0: Thông tin không tồn tại.`,
          description: `Dữ liệu không tồn tại`,
        }],
        components: [],
    };

    // const responseText = `Con số Nhân cách của bạn: *${result}*\n\n`;
    // payloadFromData.t = responseText;
    return payloadFromData;
}

async function handleAttitude(birthday) {
    const [year, month, day] = birthday.split('-');
    const result = reduceNumber(sumDigits(month) + sumDigits(day), false);

    const payloadFromData = numerologyData.attitude[result] || {
        embed: [{
          color: getRandomColor(),
          title: `Con số Thái độ 0: Thông tin không tồn tại.`,
          description: `Dữ liệu không tồn tại`,
        }],
        components: [],
    };

    // const responseText = `Con số Thái độ của bạn: *${result}*\n\n`;
    // payloadFromData.t = responseText;
    return payloadFromData;
}

async function sendAllNumerologyResults(client, event, name, birthday, isNewMessage = false) {
    const payloads = await Promise.all([
        handleLifePath(birthday),
        handleExpression(name),
        handleSoulUrge(name),
        handlePersonality(name),
        handleAttitude(birthday)
    ]);

    const combinedText = payloads.map(p => p.t);
    const combinedEmbeds = payloads.flatMap(p => p.embed || []);
    
    const finalPayload = {
        t: `Dưới đây là kết quả về các con số của bạn, ${name}:`,
        embed: combinedEmbeds,
        components: []
    };
    
    if(!isNewMessage){
      await updateMessage(client, event, finalPayload);
    } else {
      await replyMessage(client, event, finalPayload);
    }

}

module.exports = {
    sendAllNumerologyResults
};
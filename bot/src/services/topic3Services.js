const { updateMessage, getRandomColor, replyMessage } = require('../utils/helps');
const numerologyData = require('../data/numerologyData');

function centerString(str, length) {
  if(str.length > 0){
    const padLength = length - str.length;
    const padStart = Math.floor(padLength / 2);
    const padEnd = padLength - padStart;
    return ' '.repeat(padStart) + str + ' '.repeat(padEnd);
  } else {
    return ' '.repeat(length);
  }
}

function generateBirthChartGrid(counts) {
  // Lấy danh sách các số xuất hiện
  const chartNumbers = {};
  for (let i = 1; i <= 9; i++) {
    const digit = i.toString();
    const count = counts[digit] || 0;
    if (count > 0) {
      chartNumbers[digit] = digit.repeat(count);
    } else {
      chartNumbers[digit] = ' ';
    }
  }

  const cellSize = 20; // Độ rộng cố định của mỗi ô

  const grid =
    `|${centerString(chartNumbers['7'], cellSize)}|${centerString(chartNumbers['8'], cellSize)}|${centerString(chartNumbers['9'], cellSize)}|\n` +
    `|${centerString(chartNumbers['4'], cellSize)}|${centerString(chartNumbers['5'], cellSize)}|${centerString(chartNumbers['6'], cellSize)}|\n` +
    `|${centerString(chartNumbers['1'], cellSize)}|${centerString(chartNumbers['2'], cellSize)}|${centerString(chartNumbers['3'], cellSize)}|\n`;
  
  return grid;
}

async function getBirthChartPayload(birthday) {
  const allDigits = birthday.replace(/-/g, '').split('').map(Number);
  const counts = {};
  for (let i = 1; i <= 9; i++) {
    counts[i] = 0;
  }
  for (const digit of allDigits) {
    if (digit >= 1 && digit <= 9) {
      counts[digit]++;
    }
  }

  const allArrows = {
    'Hoạch định': [1, 2, 3],
    'Ý chí': [4, 5, 6],
    'Hành động': [7, 8, 9],
    'Thực tế': [1, 4, 7],
    'Cân bằng cảm xúc': [2, 5, 8],
    'Trí tuệ': [3, 6, 9],
    'Quyết tâm': [1, 5, 9],
    'Tình yêu thương': [3, 5, 7],
  };

  const powerArrows = [];
  const missingArrows = [];

  for (const name in allArrows) {
    const arrowDigits = allArrows[name];
    const hasAllDigits = arrowDigits.every(digit => counts[digit]);
    const hasNoDigits = arrowDigits.some(digit => !counts[digit]);

    if (hasAllDigits) {
        powerArrows.push(name);
    } else if (hasNoDigits) {
        missingArrows.push(name);
    }
  }

  const birthChartGrid = generateBirthChartGrid(counts);
  const payload = {
    t: `Biểu đồ Ngày sinh\n\n` +
       `Dưới đây là biểu đồ ngày sinh của bạn:\n` +
       birthChartGrid +
       `\nDưới đây là phân tích về các con số và mũi tên trong ngày sinh của bạn:\n\n`,
    embed: [
      {
        color: getRandomColor(),
        title: "Các Mũi tên Sức mạnh 💪",
        description: powerArrows.length > 0 ? powerArrows.map(arrow => `- ${arrow}\n${numerologyData.birthChartArrows[arrow] || 'Không có nội dung.'}`).join('\n') : 'Không có mũi tên sức mạnh.',
      },
      {
        color: getRandomColor(),
        title: "Các Mũi tên Khuyết thiếu 😔",
        description: missingArrows.length > 0 ? missingArrows.map(arrow => `- ${arrow}\n${numerologyData.birthChartArrows[arrow] || 'Không có nội dung.'}`).join('\n') : 'Không có mũi tên khuyết thiếu.',
      },
      {
        color: getRandomColor(),
        title: "Ý nghĩa các con số lặp lại",
        fields: Object.keys(counts).filter(digit => counts[digit] > 0).map(digit => {
            const count = counts[digit];
            return {
                name: `Số ${digit} xuất hiện ${count} lần`,
                value: numerologyData.birthChartNumberCounts[digit][count] || "Không có nội dung.",
            };
        }),
      }
    ],
    components: [],
  };

  return payload;
}

async function sendBirthChartResults(client, event, birthday, isNewMessage = false) {
    const payload = await getBirthChartPayload(birthday);
    
    // payload.t = `Chào bạn, ${name}.\n\n` + payload.t;

    if(!isNewMessage) {
      await updateMessage(client, event, payload);
    } else {
      await replyMessage(client, event, payload);
    }
}

module.exports = {
  sendBirthChartResults,
};
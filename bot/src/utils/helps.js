/**
 * Cập nhật tin nhắn với nội dung và component tùy chỉnh.
 * @param {object} client - Đối tượng client của bot.
 * @param {object} event - Đối tượng sự kiện tương tác.
 * @param {object} payload - Nội dung mới của tin nhắn (text, embeds, components, v.v.).
 */
async function updateMessage(client, event, payload) {
  try {
    const channel = await client.channels.fetch(event.channel_id);
    const message = await channel.messages.fetch(event.message_id);
    await message.update(payload);
  } catch (error) {
    console.error('Lỗi khi cập nhật tin nhắn:', error);
  }
}

/**
 * Trả về một mã màu hex ngẫu nhiên.
 * @returns {string} Một chuỗi mã màu hex.
 */
function getRandomColor() {
  const colors = [
    '#1ABC9C', // Aqua
    '#11806A', // DarkAqua
    '#57F287', // Green
    '#1F8B4C', // DarkGreen
    '#3498DB', // Blue
    '#206694', // DarkBlue
    '#9B59B6', // Purple
    '#71368A', // DarkPurple
    '#E91E63', // LuminousVividPink
    '#AD1457', // DarkVividPink
    '#F1C40F', // Gold
    '#C27C0E', // DarkGold
    '#E67E22', // Orange
    '#A84300', // DarkOrange
    '#ED4245', // Red
    '#992D22', // DarkRed
    '#BCC0C0', // LightGrey
    '#FFFF00', // Yellow',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex] || '#F1C40F';
}

module.exports = { updateMessage, getRandomColor };
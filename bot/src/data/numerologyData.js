const { getRandomColor } = require('../utils/helps');
const { EMarkdownType } = require("mezon-sdk");

module.exports = {
  lifePath: {
    1: {
      // t: `Bạn là người tiên phong, lãnh đạo bẩm sinh. Bạn độc lập, tự chủ và có khả năng dẫn dắt người khác.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 1: Nhà lãnh đạo bẩm sinh.`,
        description: `Mạnh mẽ, linh hoạt, độc lập; có tố chất tiên phong, tạo dựng con đường riêng.`,
      }],
      components: [],
    },
    2: {
      // t: `Bạn nhạy cảm, hòa nhã và luôn tìm kiếm sự cân bằng.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 2: Người hoà giải.`,
        description: `Nhạy cảm, hợp tác, trung thành; phù hợp vai trò hỗ trợ, ngoại giao.`
      }],
      components: [],
    },
    3: {
      // t: `Bạn là người lạc quan, nghệ sĩ và có sức hút. Bạn tỏa sáng thông qua sự sáng tạo và thể hiện bản thân.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 3: Người sáng tạo.`,
        description: `Vui vẻ, hài hước, giao tiếp tốt; phù hợp nghệ thuật, diễn xuất, truyền thông.`
      }],
      components: [],
    },
    4: {
      // t: `Bạn là người có trách nhiệm và thực tế. Bạn xây dựng nền tảng vững chắc và đáng tin cậy.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 4: Người thực tế .`,
        description: `Logic, kỷ luật, tỉ mỉ; tốt trong quản trị và tổ chức; nhưng dễ bảo thủ.`
      }],
      components: [],
    },
    5: {
      // t: `Bạn khao khát tự do, thích phiêu lưu và không ngừng khám phá. Cuộc sống của bạn là một hành trình thay đổi.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 5: Người tự do.`,
        description: `Thích phiêu lưu, linh hoạt, cởi mở; phù hợp công việc sáng tạo, du lịch.`
      }],
      components: [],
    },
    6: {
      // t: `Bạn là người của gia đình, giàu tình cảm và trách nhiệm. Bạn luôn quan tâm, chăm sóc và cống hiến cho mọi người.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 6: Người hậu phương.`,
        description: `Có trách nhiệm, yêu thương, tận tâm; thích chăm sóc gia đình, cộng đồng.`
      }],
      components: [],
    },
    7: {
      // t: `Bạn là người sống nội tâm, thích phân tích và tìm kiếm sự thật. Bạn có sự kết nối sâu sắc với thế giới tâm linh.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 7: Người thích trải nghiệm .`,
        description: `Sâu sắc, triết lý, thích nghiên cứu, theo trực giác; ít tin người, sống nội tâm.`
      }],
      components: [],
    },
    8: {
      // t: `Bạn là người có tham vọng lớn và khả năng lãnh đạo tài chính. Bạn có năng lượng mạnh mẽ để xây dựng thành công.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 8: Người điều hành.`,
        description: `Quyền lực, nghiêm túc, tập trung vào vật chất và tài chính; có đầu óc quản trị.`
      }],
      components: [],
    },
    9: {
      // t: `Bạn là người vị tha và nhân đạo. Bạn có trái tim rộng lớn và muốn cống hiến cho cộng đồng.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 9: Người vị tha.`,
        description: `Nhân đạo, lý tưởng, hướng về cộng đồng; sống vì người khác, đôi khi thiếu kiên nhẫn.`
      }],
      components: [],
    },
    11: {
      // t: `Bạn có trực giác và sự nhạy cảm phi thường. Bạn sinh ra để truyền cảm hứng và kết nối tâm linh.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 11: Master – Trực giác cao.`,
        description: `Sâu sắc, cảm nhận tốt, có khả năng truyền cảm hứng & dẫn dắt bằng tâm linh.`
      }],
      components: [],
    },
    22: {
      // t: `Bạn có khả năng biến những ý tưởng lớn thành hiện thực. Bạn là một nhà xây dựng bậc thầy.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 22: Master – Kiến tạo lớn.`,
        description: `Nắm tầm nhìn lớn, có khả năng biến ước mơ thành hiện thực nếu biết kiểm soát bản thân.`
      }],
      components: [],
    },
    33: {
      // t: `Bạn là một người thầy vĩ đại, mang trong mình năng lượng của tình yêu và sự chữa lành. Bạn có sức ảnh hưởng lớn đến người khác.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số đường đời 33: Master – Phục vụ vô điều kiện.`,
        description: `Thầy chữa lành, hy sinh, truyền cảm hứng & yêu thương sâu sắc, vì cộng đồng.`
      }],
      components: [],
    },
  },
  expression: {
    1: {
      // t: `Bạn có khả năng mạnh mẽ để tự thể hiện mình, tạo ấn tượng với mọi người.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 1: Nhà lãnh đạo.`,
        description: `Người lãnh đạo độc lập, sáng tạo, quyết đoán. Sứ mệnh là tiên phong, tạo ra con đường riêng..`
      }],
      components: [],
    },
    2: {
      // t: `Bạn thể hiện mình thông qua sự hợp tác, ngoại giao và khả năng chia sẻ cảm xúc.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 2: Nhà ngoại giao.`,
        description: `Người cộng tác, khéo léo trong ngoại giao. Sứ mệnh là hòa giải, xây dựng mối quan hệ hài hòa.`
      }],
      components: [],
    },
    3: {
      // t: `Bạn tỏa sáng thông qua sự sáng tạo, vui vẻ và khả năng giao tiếp.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 3: Người truyền cảm hứng.`,
        description: `Người truyền cảm hứng, sáng tạo, nghệ thuật. Sứ mệnh là mang lại niềm vui, biểu đạt bản thân.`
      }],
      components: [],
    },
    4: {
      // t: `Bạn là người có trách nhiệm và thực tế. Bạn xây dựng nền tảng vững chắc và đáng tin cậy.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 4: Người xây dựng.`,
        description: `Người tổ chức, kiên định, thực tế. Sứ mệnh là xây dựng nền tảng vững chắc và hệ thống hiệu quả.`
      }],
      components: [],
    },
    5: {
      // t: `Bạn khao khát tự do, thích phiêu lưu và không ngừng khám phá. Tài năng của bạn là khả năng thích nghi và sự linh hoạt.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 5: Người tự do.`,
        description: `Người thích thay đổi, năng động, tự do. Sứ mệnh là truyền tải sự linh hoạt và mở rộng giới hạn.`
      }],
      components: [],
    },
    6: {
      // t: `Bạn là người của gia đình, giàu tình cảm và trách nhiệm. Bạn luôn quan tâm, chăm sóc và cống hiến cho mọi người.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 6: Người chăm sóc.`,
        description: `Người chăm sóc, có trách nhiệm, lý tưởng. Sứ mệnh là nuôi dưỡng, bảo vệ, kiến tạo sự hài hòa.`
      }],
      components: [],
    },
    7: {
      // t: `Bạn là người sống nội tâm, thích phân tích và tìm kiếm sự thật. Bạn có sự kết nối sâu sắc với thế giới tâm linh.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 7: Nhà phân tích.`,
        description: `Người phân tích, tìm kiếm tri thức, trực giác cao. Sứ mệnh là khám phá chiều sâu của cuộc sống.`
      }],
      components: [],
    },
    8: {
      // t: `Bạn là người có tham vọng lớn và khả năng lãnh đạo tài chính. Bạn có năng lượng mạnh mẽ để xây dựng thành công.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 8: Nhà lãnh đạo.`,
        description: `Người lãnh đạo tài chính, có tầm nhìn. Sứ mệnh là xây dựng quyền lực và tạo ra thành tựu vật chất.`
      }],
      components: [],
    },
    9: {
      // t: `Bạn là người vị tha và nhân đạo. Bạn có trái tim rộng lớn và muốn cống hiến cho cộng đồng.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 9: Người vị tha.`,
        description: `Người nhân đạo, lý tưởng hóa, vị tha. Sứ mệnh là phục vụ cộng đồng, truyền bá tình yêu thương.`
      }],
      components: [],
    },
    11: {
      // t: `Bạn có trực giác và sự nhạy cảm phi thường. Bạn sinh ra để truyền cảm hứng và kết nối tâm linh.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 11: Người truyền cảm hứng.`,
        description: `Người truyền cảm hứng tinh thần, tâm linh cao. Sứ mệnh là khai sáng, nâng cao nhận thức tập thể.`
      }],
      components: [],
    },
    22: {
      // t: `Bạn có khả năng biến những ý tưởng lớn thành hiện thực. Bạn là một nhà xây dựng bậc thầy.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 22: Thầy xây dựng.`,
        description: `Người xây dựng những công trình vĩ đại, mang tính nhân loại. Sứ mệnh là hiện thực hóa những lý tưởng cao cả.`
      }],
      components: [],
    },
    33: {
      // t: `Bạn là một người thầy vĩ đại, mang trong mình năng lượng của tình yêu và sự chữa lành. Bạn có sức ảnh hưởng lớn đến người khác.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số sứ mệnh 33: Người thầy vĩ đại.`,
        description: `Người thầy tâm linh, tình yêu vô điều kiện. Sứ mệnh là chữa lành, dạy dỗ bằng tình thương cao cấp.`
      }],
      components: [],
    },
  },
  soulUrge: {
    1: {
      // t: `Bạn có khát khao mãnh liệt về sự độc lập và thành công cá nhân.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 1: Mong muốn của người tiên phong.`,
        description: `Mong muốn độc lập, lãnh đạo, tự khẳng định bản thân. Thích làm chủ, có ý chí mạnh mẽ.`
      }],
      components: [],
    },
    2: {
      // t: `Bạn có mong muốn sâu thẳm được yêu thương, kết nối và mang lại sự hòa bình cho mọi người.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 2: Mong muốn của người hòa giải.`,
        description: `Khao khát sự hòa hợp, yêu thương, hợp tác. Nhạy cảm và cần môi trường yên bình.`
      }],
      components: [],
    },
    3: {
      // t: `Bạn có khát khao thể hiện bản thân qua sự sáng tạo, nghệ thuật và niềm vui.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 3: Mong muốn của người nghệ sĩ.`,
        description: `Mong muốn thể hiện cảm xúc, sáng tạo và niềm vui. Yêu thích giao tiếp, nghệ thuật.`
      }],
      components: [],
    },
    4: {
      // t: `Bạn khao khát sự ổn định và an toàn. Bạn muốn xây dựng một nền tảng vững chắc cho bản thân và gia đình.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 4: Mong muốn của người xây dựng.`,
        description: `Tìm kiếm sự ổn định, kỷ luật và trật tự. Yêu công việc, có trách nhiệm cao.`
      }],
      components: [],
    },
    5: {
      // t: `Bạn có mong muốn sâu thẳm được tự do, phiêu lưu và trải nghiệm.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 5: Mong muốn của người tự do.`,
        description: `Khao khát tự do, phiêu lưu và thay đổi. Thích thử nghiệm, ghét ràng buộc.`
      }],
      components: [],
    },
    6: {
      // t: `Bạn có khao khát mãnh liệt được chăm sóc, cống hiến và bảo vệ những người mình yêu thương.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 6: Mong muốn của người chăm sóc.`,
        description: `Mong muốn yêu thương, chăm sóc, gia đình. Tận tâm và có trách nhiệm với người khác.`
      }],
      components: [],
    },
    7: {
      // t: `Bạn khao khát tìm kiếm sự thật, kiến thức và có xu hướng sống nội tâm.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 7: Mong muốn của nhà nghiên cứu.`,
        description: `Tìm kiếm chiều sâu tinh thần, tri thức và sự riêng tư. Thích phân tích, suy ngẫm.`
      }],
      components: [],
    },
    8: {
      // t: `Bạn có mong muốn sâu thẳm về quyền lực, tài chính và sự thành công.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 8: Mong muốn của nhà lãnh đạo.`,
        description: `Khao khát thành công vật chất, quyền lực và ảnh hưởng. Có tố chất điều hành.`
      }],
      components: [],
    },
    9: {
      // t: `Bạn khao khát sự nhân đạo, lòng trắc ẩn và muốn đóng góp cho cộng đồng.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 9: Mong muốn của người vị tha.`,
        description: `Mong muốn phụng sự nhân loại, từ bi và bác ái. Lý tưởng cao đẹp, hay giúp đỡ người khác.  `
      }],
      components: [],
    },
    11: {
      // t: `Bạn khao khát được truyền cảm hứng và kết nối tâm linh, mang lại ánh sáng cho người khác.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 11: Mong muốn của người truyền cảm hứng.`,
        description: `Trực giác mạnh mẽ, lý tưởng tâm linh cao, mong muốn khai sáng hoặc truyền cảm hứng.`
      }],
      components: [],
    },
    22: {
      // t: `Bạn có mong muốn sâu thẳm biến những ước mơ vĩ đại thành hiện thực, để lại di sản.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 22: Mong muốn của thầy xây dựng.`,
        description: `Mong muốn xây dựng điều vĩ đại, thực tế và bền vững. Kết hợp mơ ước và hành động.`
      }],
      components: [],
    },
    33: {
      // t: `Bạn có mong muốn sâu thẳm trở thành một người thầy vĩ đại, mang lại tình yêu và sự chữa lành cho thế giới.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số linh hồn 33: Mong muốn của người thầy vĩ đại.`,
        description: `Linh hồn của người chữa lành. Tình yêu vô điều kiện, phụng sự vô vị lợi.`
      }],
      components: [],
    },
  },
  personality: {
    1: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự tự tin, mạnh mẽ và độc lập.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 1: Tiên phong.`,
        description: `Tự tin, quyết đoán nhưng đôi khi tự cao.`
      }],
      components: [],
    },
    2: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự thân thiện, hòa nhã và dễ gần.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 2: Hoà giải.`,
        description: `Dịu dàng, ngoại giao nhưng dễ bị ảnh hưởng.`
      }],
      components: [],
    },
    3: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự vui vẻ, lạc quan và đầy sức sống.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 3: Hài hước, sinh động.`,
        description: `Giao tiếp tốt nhưng có thể hời hợt.`
      }],
      components: [],
    },
    4: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự đáng tin cậy, nghiêm túc và có trách nhiệm.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 4: Nghiêm túc, thực tế.`,
        description: `Có tổ chức nhưng dễ bảo thủ.`
      }],
      components: [],
    },
    5: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự năng động, cuốn hút và thích phiêu lưu.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 5: Năng động, phiêu lưu.`,
        description: `Thích thú khám phá nhưng thiếu kiên định.`
      }],
      components: [],
    },
    6: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự ấm áp, quan tâm và chu đáo.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 6: Nhân ái, trách nhiệm.`,
        description: `Đáng tin, chăm sóc tốt nhưng đôi khi quá bao bọc.`
      }],
      components: [],
    },
    7: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự bí ẩn, sâu sắc và trí tuệ.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 7: Bí ẩn, suy tư.`,
        description: `Thích sâu sắc nhưng dễ cô đơn.`
      }],
      components: [],
    },
    8: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự mạnh mẽ, quyết đoán và có quyền lực.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 8: Quyền lực, sáng suốt.`,
        description: `Quyết đoán nhưng cần cẩn trọng điều phối.`
      }],
      components: [],
    },
    9: {
      // t: `Ấn tượng đầu tiên bạn tạo ra là sự vị tha, bao dung và đầy lòng trắc ẩn.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số nhân cách 9: Nhân hậu, trực giác.`,
        description: `Ấm áp và đáng tin cậy; phong thái lãnh đạo cảm xúc.`
      }],
      components: [],
    },
  },
  attitude: {
    1: {
      // t: `Bạn phản ứng với cuộc sống một cách độc lập và tự tin. Bạn tiếp cận các vấn đề một cách trực diện và không ngại dẫn đầu.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 1: Người độc lập.`,
        description: `Tự tin, kiên quyết, chủ động. “Phá vỡ mọi giới hạn” nhưng dễ bốc đồng, cần học thấu hiểu dấu hiệu cảnh báo trong cuộc sống.`
      }],
      components: [],
    },
    2: {
      // t: `Bạn phản ứng với cuộc sống một cách nhạy cảm và hòa nhã. Bạn luôn tìm kiếm sự cân bằng và tránh đối đầu.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 2: Người hòa giải.`,
        description: `Dịu dàng, nhạy cảm, hợp tác, trực giác mạnh, dễ cảm hóa người khác .`
      }],
      components: [],
    },
    3: {
      // t: `Bạn phản ứng với cuộc sống một cách lạc quan và đầy sáng tạo. Bạn luôn tìm thấy niềm vui trong mọi tình huống.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 3: Người lạc quan.`,
        description: `Thân thiện, hướng ngoại, hài hước, tạo bầu không khí tích cực, có sức hút lớn.`
      }],
      components: [],
    },
    4: {
      // t: `Bạn phản ứng với cuộc sống một cách thực tế và có trách nhiệm. Bạn luôn tuân thủ nguyên tắc và cẩn trọng.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 4: Người thực tế.`,
        description: `Chín chắn, đáng tin, thực tế, tập trung vào bản chất và giải pháp; nhưng dễ bị hiểu nhầm là cứng nhắc.`
      }],
      components: [],
    },
    5: {
      // t: `Bạn phản ứng với cuộc sống một cách linh hoạt và thích ứng nhanh. Bạn khao khát trải nghiệm và không ngại thay đổi.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 5: Người linh hoạt.`,
        description: `Phóng khoáng, linh hoạt, sáng tạo, tò mò; tuy nhiên có thể dễ mất kiểm soát cảm xúc hoặc lẽ sống.`
      }],
      components: [],
    },
    6: {
      // t: `Bạn phản ứng với cuộc sống bằng sự quan tâm và trách nhiệm. Bạn luôn đặt gia đình và cộng đồng lên hàng đầu.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 6: Người chăm sóc.`,
        description: `BThân thiện, chăm sóc, yêu thương, ổn định; dễ trở thành điểm tựa cho người khác.`
      }],
      components: [],
    },
    7: {
      // t: `Bạn phản ứng với cuộc sống bằng sự suy tư và phân tích. Bạn không vội vã đưa ra quyết định mà luôn tìm hiểu sâu sắc.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 7: Người suy tư.`,
        description: `Trầm tư, nội tâm, bí ẩn, triết lý; người khác cảm nhận bạn là sâu sắc nhưng khó gần.`
      }],
      components: [],
    },
    8: {
      // t: `Bạn phản ứng với cuộc sống bằng sự quyết đoán và tham vọng. Bạn luôn hướng tới thành công và quyền lực.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 8: Người quyết đoán.`,
        description: `Quyền lực, đáng tin, lãnh đạo, có tầm ảnh hưởng; đôi khi khiến người khác cảm thấy áp lực.`
      }],
      components: [],
    },
    9: {
      // t: `Bạn phản ứng với cuộc sống bằng sự vị tha và lòng trắc ẩn. Bạn luôn muốn giúp đỡ người khác và cống hiến cho cộng đồng.`,
      embed: [{
        color: getRandomColor(),
        title: `Con số thái độ 9: Người vị tha.`,
        description: `Trưởng thành, bao dung, giàu cảm thông; có thể mang vẻ nghiêm túc hoặc kiềm chế nội tâm.`
      }],
      components: [],
    },
  },
  pinnacle: {
    1: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 1`,
        description: `Đây là giai đoạn bạn cần học cách tự lập và tin vào bản thân. Bạn sẽ phải đối mặt với những thách thức đòi hỏi sự dũng cảm và quyết đoán.`,
      }],
      components: [],
    },
    2: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 2`,
        description: `Đây là giai đoạn bạn cần học cách hợp tác và ngoại giao. Sự kiên nhẫn và thấu hiểu sẽ giúp bạn vượt qua các thử thách trong mối quan hệ.`,
      }],
      components: [],
    },
    3: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 3`,
        description: `Đây là giai đoạn dành cho sự sáng tạo và thể hiện bản thân. Bạn sẽ có cơ hội phát triển tài năng nghệ thuật và giao tiếp.`,
      }],
      components: [],
    },
    4: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 4`,
        description: `Đây là giai đoạn để xây dựng nền tảng vững chắc. Bạn cần tập trung vào công việc, kỷ luật và sự ổn định.`,
      }],
      components: [],
    },
    5: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 5`,
        description: `Đây là giai đoạn của sự thay đổi và phiêu lưu. Bạn sẽ có nhiều cơ hội để trải nghiệm những điều mới mẻ và mở rộng tầm nhìn.`,
      }],
      components: [],
    },
    6: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 6`,
        description: `Đây là giai đoạn dành cho gia đình và trách nhiệm. Bạn sẽ tìm thấy ý nghĩa trong việc chăm sóc và cống hiến cho những người thân yêu.`,
      }],
      components: [],
    },
    7: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 7`,
        description: `Đây là giai đoạn để khám phá nội tâm và tìm kiếm sự thật. Bạn sẽ có xu hướng sống chậm lại, suy ngẫm và phát triển trí tuệ.`,
      }],
      components: [],
    },
    8: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 8`,
        description: `Đây là giai đoạn của quyền lực và thành công vật chất. Bạn sẽ có cơ hội lớn để phát triển sự nghiệp và đạt được những mục tiêu tài chính.`,
      }],
      components: [],
    },
    9: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 9`,
        description: `Đây là giai đoạn của lòng nhân đạo và sự kết thúc. Bạn sẽ hoàn thành những bài học cũ để chuẩn bị cho một chương mới.`,
      }],
      components: [],
    },
    11: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 11`,
        description: `Đây là giai đoạn phát triển trực giác và tâm linh. Bạn sẽ có khả năng truyền cảm hứng và trở thành người dẫn đường cho người khác.`,
      }],
      components: [],
    },
    22: {
      t: ``,
      embed: [{
        color: getRandomColor(),
        title: `Con số đỉnh kim tự tháp : 22`,
        description: `Đây là giai đoạn hiện thực hóa ước mơ vĩ đại. Bạn có thể biến những ý tưởng lớn thành hiện thực và để lại di sản.`,
      }],
      components: [],
    },
  },
  personalYear: {
    1: `Đây là năm của những khởi đầu mới. Hãy mạnh dạn gieo những hạt giống đầu tiên cho những dự án và mục tiêu trong tương lai.`,
    2: `Đây là năm của sự hợp tác và kiên nhẫn. Hãy tập trung vào việc xây dựng các mối quan hệ và phát triển sự nghiệp một cách chậm rãi, ổn định.`,
    3: `Đây là năm của sự sáng tạo và giao tiếp. Hãy tự tin thể hiện bản thân, tham gia các hoạt động xã hội và lan tỏa niềm vui.`,
    4: `Đây là năm của sự ổn định và làm việc chăm chỉ. Hãy tập trung vào việc xây dựng nền tảng vững chắc cho cả sự nghiệp và cuộc sống cá nhân.`,
    5: `Đây là năm của sự thay đổi và phiêu lưu. Hãy sẵn sàng cho những cơ hội bất ngờ và những trải nghiệm mới mẻ.`,
    6: `Đây là năm của gia đình và trách nhiệm. Hãy dành thời gian chăm sóc những người thân yêu và cống hiến cho cộng đồng.`,
    7: `Đây là năm của sự suy ngẫm và phát triển tâm linh. Hãy dành thời gian cho bản thân, học hỏi và tìm kiếm kiến thức sâu sắc hơn.`,
    8: `Đây là năm của sự thành công và quyền lực. Hãy mạnh dạn hành động để đạt được những mục tiêu tài chính và sự nghiệp.`,
    9: `Đây là năm của sự kết thúc và buông bỏ. Hãy hoàn thành những việc còn dang dở để chuẩn bị cho một chu kỳ mới sắp đến.`,
    11: `Đây là năm của trực giác và sự giác ngộ. Bạn sẽ có khả năng kết nối sâu sắc với người khác và nhận được những thông điệp quan trọng từ vũ trụ.`,
    22: `Đây là năm của sự hiện thực hóa. Bạn có thể biến những ước mơ lớn nhất thành hiện thực và tạo ra những điều vĩ đại.`
  },
  birthChartArrows: {
    'Hoạch định': `Thể hiện khả năng lên kế hoạch, tư duy logic và tổ chức.`,
    'Ý chí': `Biểu thị ý chí mạnh mẽ, sự kiên trì và khả năng vượt qua thử thách.`,
    'Hành động': `Cho thấy một người có khả năng hành động, thực thi và đạt được mục tiêu.`,
    'Thực tế': `Thể hiện tính thực tế, đáng tin cậy và khả năng sống có tổ chức.`,
    'Cân bằng cảm xúc': `Cho thấy sự nhạy cảm, trực giác tốt và khả năng thấu hiểu người khác.`,
    'Trí tuệ': `Biểu thị trí tuệ, trí tưởng tượng phong phú và khả năng sáng tạo.`,
    'Quyết tâm': `Thể hiện sự quyết tâm, kiên định và luôn hướng đến mục tiêu.`,
    'Tình yêu thương': `Cho thấy trái tim nhân hậu, lòng trắc ẩn và sự vị tha.`,
  },
  birthChartNumberCounts: {
    '1': {
      1: "Đây là con số của sự độc lập và tự chủ. Bạn có khả năng lãnh đạo và tiên phong trong các lĩnh vực mới. Bạn cần học cách tin tưởng vào bản thân và thể hiện cá tính một cách mạnh mẽ.",
      2: "Sự hiện diện của hai số 1 cho thấy bạn có năng lực tự chủ cao và khả năng truyền cảm hứng. Bạn có thể là một người lãnh đạo bẩm sinh, luôn khao khát thể hiện bản thân và đạt được sự công nhận từ người khác.",
      3: "Ba số 1 làm tăng thêm sức mạnh của sự tự chủ và năng lượng sáng tạo. Bạn có thể trở nên quá nhạy cảm và cần học cách cân bằng cảm xúc để không bị mất kiểm soát.",
      4: "Bốn số 1 tạo ra một nguồn năng lượng lớn, nhưng cũng dễ gây ra sự quá tải. Bạn cần học cách kiểm soát năng lượng của mình và tìm cách để thư giãn, tránh rơi vào trạng thái căng thẳng hoặc mệt mỏi.",
      5: "Năm số 1 hoặc nhiều hơn: Đây là một nguồn năng lượng vô cùng mạnh mẽ, nhưng cũng tiềm ẩn rủi ro. Bạn có thể trở nên quá tự tin, thậm chí là độc đoán, và cần học cách lắng nghe người khác để tránh xung đột."
    },
    '2': {
      1: "Đây là con số của trực giác và sự nhạy cảm. Bạn là người hòa giải bẩm sinh, có khả năng thấu hiểu và kết nối với người khác. Bạn cần học cách bảo vệ bản thân khỏi những ảnh hưởng tiêu cực từ môi trường xung quanh.",
      2: "Hai số 2 tăng cường năng lượng của trực giác, giúp bạn làm chủ cảm xúc của mình. Bạn có thể dễ dàng cảm nhận được tâm trạng của người khác và trở thành một người bạn đáng tin cậy.",
      3: "Ba số 2 tạo ra một nguồn trực giác cực kỳ nhạy bén, nhưng cũng khiến bạn dễ bị choáng ngợp bởi cảm xúc. Bạn cần tìm cách để cân bằng và không để cảm xúc chi phối cuộc sống.",
      4: "Bốn số 2 mang lại trực giác rất cao, gần như là năng lực tâm linh. Bạn có thể có khả năng thấu thị, thấu thính. Năng lượng này cực kỳ mạnh, đòi hỏi bạn phải học cách cân bằng và bảo vệ bản thân khỏi những nguồn năng lượng tiêu cực.",
      5: "Năm số 2 hoặc nhiều hơn cho thấy sự nhạy cảm và trực giác ở mức cực đoan. Điều này có thể khiến bạn trở nên quá dễ tổn thương và gặp khó khăn trong việc duy trì cảm xúc ổn định. Bạn cần đặc biệt chú trọng vào việc tìm kiếm sự bình yên nội tại và tránh xa những môi trường độc hại."
    },
    '3': {
      1: "Đây là con số của trí tuệ và sự sáng tạo. Bạn có khả năng diễn đạt tốt, thích hợp với các công việc liên quan đến nghệ thuật, viết lách hoặc giao tiếp.",
      2: "Hai số 3 tăng cường trí tuệ và trí tưởng tượng. Bạn có thể là một người có tư duy sắc bén, luôn tràn đầy ý tưởng và sự sáng tạo.",
      3: "Ba số 3 tạo ra một nguồn năng lượng sáng tạo rất mạnh, nhưng cũng có thể khiến bạn trở nên thiếu kiên nhẫn. Bạn cần học cách kiểm soát suy nghĩ và tập trung vào mục tiêu của mình.",
      4: "Bốn số 3 mang đến một trí tuệ cực kỳ sắc bén và khả năng sáng tạo vượt trội. Bạn có thể là một người có tư duy phản biện tốt, nhưng cũng dễ bị quá tải bởi suy nghĩ. Bạn cần học cách thư giãn và không để tâm trí hoạt động quá mức.",
      5: "Năm số 3 hoặc nhiều hơn cho thấy sự sáng tạo và trí tuệ ở mức cực đoan. Điều này có thể khiến bạn trở nên quá mơ mộng, thiếu thực tế và gặp khó khăn trong việc biến ý tưởng thành hành động. Bạn cần đặc biệt chú trọng vào việc tìm kiếm sự cân bằng giữa trí tưởng tượng và thế giới thực."
    },
    '4': {
      1: "Đây là con số của sự ổn định và thực tế. Bạn là người đáng tin cậy, có khả năng tổ chức và làm việc chăm chỉ để đạt được mục tiêu.",
      2: "Hai số 4 tăng cường khả năng xây dựng nền tảng vững chắc. Bạn có thể là một người rất có kỷ luật và kiên trì, phù hợp với các công việc đòi hỏi sự chi tiết và cẩn thận.",
      3: "Ba số 4 mang đến sự ổn định và kỷ luật cực kỳ mạnh mẽ. Bạn là một người có thể xây dựng nên những nền móng vững chắc cho bất kỳ dự án hay tổ chức nào. Tuy nhiên, bạn cần học cách linh hoạt và cởi mở hơn, tránh trở nên quá cứng nhắc.",
      4: "Bốn số 4 hoặc nhiều hơn cho thấy bạn có năng lực xây dựng và làm việc tuyệt vời, nhưng cũng tiềm ẩn nguy cơ trở nên quá cứng nhắc, bảo thủ và chỉ tập trung vào công việc mà thiếu sự cân bằng trong cuộc sống. Bạn cần chú trọng vào việc nghỉ ngơi và thư giãn để không bị kiệt sức."
    },
    '5': {
      1: "Đây là con số của sự thay đổi và tự do. Bạn thích phiêu lưu và khám phá những điều mới mẻ. Bạn cần học cách thích nghi với mọi hoàn cảnh và không để sự thay đổi trở thành nỗi sợ hãi.",
      2: "Hai số 5 tăng cường khát khao tự do và khám phá. Bạn có thể trở nên thiếu kiên nhẫn và dễ bị phân tâm nếu không tìm được mục tiêu rõ ràng.",
      3: "Ba số 5 mang đến một nguồn năng lượng thay đổi và phiêu lưu cực kỳ mạnh mẽ. Bạn rất thích những trải nghiệm mới và có thể dễ dàng thích nghi với mọi hoàn cảnh. Tuy nhiên, bạn cần học cách kiên trì và hoàn thành mục tiêu, tránh 'cả thèm chóng chán'.",
      4: "Bốn số 5 hoặc nhiều hơn cho thấy sự thay đổi và phiêu lưu ở mức cực đoan. Bạn có thể gặp khó khăn trong việc tìm kiếm sự ổn định và dễ bị cuốn vào những cám dỗ. Bạn cần đặc biệt chú trọng vào việc kiểm soát năng lượng và tập trung vào những điều thực sự quan trọng."
    },
    '6': {
      1: "Đây là con số của tình yêu thương và trách nhiệm. Bạn là người có lòng trắc ẩn, luôn quan tâm đến gia đình và cộng đồng. Bạn cần học cách yêu thương bản thân và không để người khác lợi dụng lòng tốt của mình.",
      2: "Hai số 6 tăng cường lòng trắc ẩn và sự vị tha. Bạn có thể trở nên quá tải bởi trách nhiệm và cần học cách bảo vệ bản thân khỏi sự mệt mỏi về tinh thần.",
      3: "Ba số 6 cho thấy bạn có một trái tim vô cùng nhân hậu và tinh thần trách nhiệm cực kỳ cao. Bạn là người luôn sẵn lòng giúp đỡ người khác, nhưng cũng dễ trở nên quá gánh nặng và hy sinh bản thân. Bạn cần học cách nói 'không' và đặt ranh giới để bảo vệ năng lượng của mình.",
      4: "Bốn số 6 hoặc nhiều hơn cho thấy tình yêu thương và trách nhiệm ở mức cực đoan. Bạn có thể trở thành một người mẹ, người cha hoặc người bạn sẵn lòng hy sinh mọi thứ cho người khác. Điều này có thể dẫn đến sự kiệt sức và mất cân bằng trong cuộc sống. Bạn cần đặc biệt chú trọng vào việc chăm sóc bản thân."
    },
    '7': {
      1: "Đây là con số của sự trải nghiệm và học hỏi. Bạn là người tò mò, luôn tìm kiếm sự thật và kiến thức. Bạn cần học cách chấp nhận những bài học từ cuộc sống và tin rằng mọi khó khăn đều là cơ hội để phát triển.",
      2: "Hai số 7 tăng cường khả năng học hỏi từ trải nghiệm, nhưng cũng có thể gặp những bài học khó khăn trong cuộc sống.",
      3: "Ba số 7 hoặc nhiều hơn cho thấy một người có rất nhiều bài học lớn trong cuộc đời. Bạn có thể phải đối mặt với những thử thách về tài chính, sức khỏe hoặc các mối quan hệ để học cách trưởng thành. Đây là một con số mang năng lượng của sự hy sinh và biến đổi.",
    },
    '8': {
      1: "Đây là con số của sự thành công và quyền lực. Bạn có khả năng lãnh đạo, quản lý và đạt được mục tiêu tài chính. Bạn cần học cách sử dụng quyền lực một cách đúng đắn và không để vật chất chi phối cuộc sống.",
      2: "Hai số 8 tăng cường khả năng lãnh đạo và quản lý tài chính. Bạn có thể là một người rất tham vọng và kiên trì, nhưng cần học cách cân bằng giữa công việc và cuộc sống.",
      3: "Ba số 8 hoặc nhiều hơn cho thấy bạn có một nguồn năng lượng mạnh mẽ để tạo ra của cải vật chất. Tuy nhiên, điều này cũng có thể khiến bạn trở nên quá tham vọng, độc đoán và thiếu sự quan tâm đến cảm xúc. Bạn cần tìm cách cân bằng giữa thành công và sự bình yên nội tại.",
    },
    '9': {
      1: "Đây là con số của lòng nhân đạo và sự kết thúc. Bạn có lý tưởng sống cao cả, luôn khao khát cống hiến cho cộng đồng và giúp đỡ người khác.",
      2: "Hai số 9 tăng cường lý tưởng và lòng nhân đạo. Bạn có thể là một người có tầm nhìn lớn và khả năng truyền cảm hứng cho người khác.",
      3: "Ba số 9 hoặc nhiều hơn cho thấy bạn là một nhà lãnh đạo mang tính nhân đạo bẩm sinh. Bạn có một tầm nhìn rộng lớn và khao khát thay đổi thế giới. Tuy nhiên, bạn cần học cách buông bỏ và chấp nhận rằng không phải mọi thứ đều hoàn hảo.",
    },
  }
}
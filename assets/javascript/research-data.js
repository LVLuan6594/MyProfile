/*
 * Dữ liệu cho trang Công trình NCKH.
 * demoMode = true: hiển thị dữ liệu mẫu để hoàn thiện giao diện.
 * Khi cập nhật dữ liệu chính thức, đổi thành false và đặt isDemo: false
 * cho các bản ghi đã được xác nhận.
 */
const researchData = {
  demoMode: true,
  academicProfiles: {
    googleScholar: '',
    orcid: '',
    researchGate: ''
  },
  researchStats: {
    publishedPapers: 1,
    acceptedResearchProjects: 0,
    researchProducts: 3,
    conferencePapers: 2,
    academicActivities: 3
  },
  conferencePapers: [
    {
      id: 'conference-paper-001',
      shortTitle: 'CUSC đồng hành cùng Thành phố Cần Thơ thúc đẩy chương trình khuyến nông số thông qua ứng dụng trí tuệ nhân tạo (AI)',
      title: 'CUSC đồng hành cùng Thành phố Cần Thơ thúc đẩy chương trình khuyến nông số thông qua ứng dụng trí tuệ nhân tạo (AI)',
      publicationUrl: 'https://cusc.ctu.edu.vn/cms/bai-viet/cusc-dong-hanh-cung-thanh-pho-can-tho-thuc-day-chuong-trinh-khuyen-nong-so-thong-qua-ung-dung-tri-tue-nhan-tao-ai'
    },
    {
      id: 'conference-paper-002',
      shortTitle: 'Ứng dụng CNTT và IoT trong nuôi trồng thuỷ sản',
      title: 'Ứng dụng CNTT và IoT trong nuôi trồng thuỷ sản',
      publicationUrl: ''
    }
  ],
  researchInterests: [
    { id: 'software-engineering', icon: 'fa-code', title: 'Kỹ thuật phần mềm', subtitle: 'Software Engineering', details: ['Kiến trúc phần mềm', 'Phân tích và thiết kế hệ thống', 'Chất lượng phần mềm'] },
    { id: 'artificial-intelligence', icon: 'fa-microchip', title: 'Trí tuệ nhân tạo', subtitle: 'Artificial Intelligence', details: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Multimodal Learning'] },
    { id: 'digital-transformation', icon: 'fa-database', title: 'Chuyển đổi số', subtitle: 'Digital Transformation', details: ['Nền tảng số', 'GIS', 'Quản trị và phân tích dữ liệu'] },
    { id: 'ai-agriculture', icon: 'fa-leaf', title: 'AI trong nông nghiệp', subtitle: 'AI in Agriculture', details: ['Nhận diện bệnh hại cây trồng', 'Phân tích dữ liệu nông nghiệp', 'Ứng dụng AI trong sản xuất'] },
    { id: 'health-informatics', icon: 'fa-heart-pulse', title: 'Tin học y tế', subtitle: 'Health Informatics', details: ['Hệ hỗ trợ ra quyết định', 'Hỗ trợ chẩn đoán', 'Ứng dụng AI trong y tế'] }
  ],
  publications: [
    {
      id: 'publication-001', shortTitle: 'NGHIÊN CỨU, PHÁT TRIỂN VÀ ỨNG DỤNG CÔNG NGHỆ THÔNG TIN, CHUYỂN ĐỔI SỐ CHÍNH QUYỀN ĐỊA PHƯƠNG: TRƯỜNG HỢP PHẦN MỀM QUẢN LÝ SÁNG KIẾN (CUSC-IES) VÀ QUẢN LÝ ĐỀ TÀI NHIỆM VỤ KHOA HỌC CÔNG NGHỆ (CUSC-STM)', title: 'NGHIÊN CỨU, PHÁT TRIỂN VÀ ỨNG DỤNG CÔNG NGHỆ THÔNG TIN, CHUYỂN ĐỔI SỐ CHÍNH QUYỀN ĐỊA PHƯƠNG: TRƯỜNG HỢP PHẦN MỀM QUẢN LÝ SÁNG KIẾN (CUSC-IES) VÀ QUẢN LÝ ĐỀ TÀI NHIỆM VỤ KHOA HỌC CÔNG NGHỆ (CUSC-STM)',
      authors: ['Lê Hoàng Thảo', 'Lê Vũ Luân', 'Diệp Ngô Minh Khôi', 'Trần Thị Huỳnh Hoa', 'Trần Hoàng Việt'], authorRole: 'Đồng tác giả', affiliation: 'Trung tâm Công nghệ phần mềm, Trường Đại học Cần Thơ', correspondingAuthor: 'Tác giả liên hệ: lthao@ctu.edu.vn',
      type: 'Tạp chí', venue: 'SDMD 2045', year: 2026, pages: '129', doi: '', abstract: `Chuyển đổi số trong quản lý nhà nước ở địa phương chỉ tạo ra thay đổi thực chất khi đi được trọn chuỗi: số hóa hồ sơ, số hóa quy trình nghiệp vụ, tập trung dữ liệu và cuối cùng là khai thác dữ liệu phục vụ điều hành. Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị xác định khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số là đột phá quan trọng hàng đầu để đổi mới phương thức quản trị quốc gia (Bộ Chính trị, 2024); Luật Khoa học, Công nghệ và Đổi mới sáng tạo nhấn mạnh yêu cầu khai thác, sử dụng dữ liệu số (Quốc hội, 2025a); trong khi mô hình chính quyền địa phương hai cấp vận hành từ ngày 01/7/2025 khiến khối lượng hồ sơ và dữ liệu dồn trực tiếp về cấp tỉnh và cấp xã (Quốc hội, 2025b, 2025c). Tuy nhiên, nhiều nghiệp vụ quản lý thường xuyên vẫn dừng ở mức số hóa từng phần, dữ liệu phân tán và chưa khai thác được để hỗ trợ ra quyết định. Bài tham luận phân tích cách tiếp cận ứng dụng công nghệ thông tin cho bài toán này và minh chứng bằng hai hệ thống do Trung tâm Công nghệ phần mềm Trường Đại học Cần Thơ (CUSC) nghiên cứu, phát triển và triển khai tại địa phương. CUSC-IES số hóa quy trình quản lý sáng kiến với cơ chế quy trình động cấu hình theo từng đơn vị (Trung tâm Công nghệ phần mềm Trường Đại học Cần Thơ [CUSC], n.d.-a). CUSC-STM quản lý toàn bộ vòng đời nhiệm vụ khoa học và công nghệ (KHCN) từ đề xuất đến thanh quyết toán, hình thành cơ sở dữ liệu KHCN tập trung cấp tỉnh/thành phố (CUSC, 2026). Trên nền dữ liệu đã tập trung, hai hệ thống triển khai năm lớp ứng dụng trí tuệ nhân tạo (AI): rà soát trùng lặp và kiểm tra tính mới; trích xuất nội dung hồ sơ scan; hỗ trợ thẩm định và tra cứu quy định; trợ lý hỏi – đáp (Chatbot) khai thác dữ liệu bằng ngôn ngữ tự nhiên; và phân tích, cảnh báo, dự báo phục vụ điều hành. AI giữ vai trò hỗ trợ, không thay thế thẩm quyền của hội đồng và cán bộ chuyên môn. CUSC-IES đạt Giải thưởng Sao Khuê 2023, được cấp Giấy chứng nhận đăng ký quyền tác giả và vận hành ổn định tại Sở Khoa học và Công nghệ tỉnh Sóc Trăng, Sở Khoa học và Công nghệ tỉnh Đồng Tháp và tại CUSC (CUSC, n.d.-a; Ngọc, 2023); CUSC-STM đạt Giải thưởng Sao Khuê 2026, được ghi danh trên Bản đồ Giải pháp Công nghệ số Việt Nam 2026 và đã triển khai tại nhiều đơn vị (CUSC, 2026; Thanh, 2026). Kết quả cho thấy khi quy trình được số hóa và dữ liệu được tập trung, địa phương có sẵn nền tảng để mở rộng các ứng dụng AI mà không phải xây dựng lại từ đầu.`, abstractEn: `Digital transformation in local public administration produces substantive change only when the full chain is completed: digitizing records, digitizing business processes, centralizing data, and ultimately exploiting that data for management purposes. Resolution No. 57-NQ/TW, issued on December 22, 2024 by the Politburo, identifies science, technology, innovation and digital transformation as the foremost breakthrough for reforming the national governance model (Bộ Chính trị, 2024); the Law on Science, Technology and Innovation emphasizes the exploitation and use of digital data (Quốc hội, 2025a); meanwhile, the two-tier local government model in operation since July 1, 2025 has channelled the workload of records and data directly to the provincial and commune levels (Quốc hội, 2025b, 2025c). In practice, however, many routine management functions remain only partially digitized, with fragmented data that cannot be exploited to support decision-making. This paper analyses an information technology approach to this problem and illustrates it through two systems researched, developed and deployed at local level by the Can Tho University Software Center (CUSC). CUSC-IES digitizes the initiative management process with a dynamic workflow mechanism configurable for each organization (CUSC, n.d.-a). CUSC-STM manages the entire science and technology (S&T) task lifecycle from proposal to financial settlement, forming a centralized provincial-level S&T database (CUSC, 2026). Building on this centralized data foundation, the two systems implement five layers of artificial intelligence (AI): duplication screening and novelty checking; content extraction from scanned documents; support for appraisal and regulatory look-up; a question-and-answer assistant (Chatbot) that exploits data through natural language; and analysis, alerting and forecasting for management purposes. AI plays a supporting role and does not replace the authority of councils and specialized officials. CUSC-IES received the Sao Khue Award in 2023, was granted a Certificate of Copyright Registration, and operates stably at the Departments of Science and Technology of Soc Trang and Dong Thap, as well as at CUSC (CUSC, n.d.-a; Ngọc, 2023); CUSC-STM received the Sao Khue Award in 2026, was listed in the Vietnam Digital Technology Solutions Map 2026, and has been deployed at various organizations (CUSC, 2026; Thanh, 2026). The results show that once processes are digitized and data is centralized, a locality already possesses the foundation to expand AI applications without having to rebuild from scratch.`, keywords: ['Chatbot', 'chính quyền địa phương', 'chuyển đổi số', 'quản trị dựa trên dữ liệu', 'trí tuệ nhân tạo'], image: '', pdfUrl: '', publicationUrl: 'https://sdmd2045.ctu.edu.vn/upload/thanhtuu2526/', codeUrl: '', isDemo: false
    },
    {
      id: 'publication-002', shortTitle: 'Hệ hỗ trợ chẩn đoán COPD bằng Machine Learning', title: 'A Decision Support System for COPD Diagnosis Using Machine Learning',
      authors: ['Lê Vũ Luân', 'Phạm Văn C', 'Võ Thị D'], authorRole: 'Tác giả thứ nhất',
      type: 'Tạp chí', venue: 'Journal of Information Technology and Applications', year: 2024, pages: '', doi: '', abstract: 'Nội dung minh họa về việc ứng dụng Machine Learning để hỗ trợ phân tích và chẩn đoán COPD. Đây là dữ liệu mẫu, chưa phải công bố đã xác minh.', keywords: ['Machine Learning', 'Health Informatics'], image: '', pdfUrl: '', publicationUrl: '', codeUrl: '', isDemo: true
    }
  ],
  researchProjects: [
    { id: 'research-project-001', icon: 'fa-wheat-awn', title: 'Phát hiện bệnh hại trên lúa bằng học sâu đa mô thức', status: 'Đang nghiên cứu', fields: ['Artificial Intelligence', 'Multimodal Learning', 'Computer Vision'], description: 'Nghiên cứu khả năng kết hợp nhiều nguồn thông tin để hỗ trợ phát hiện và phân loại bệnh hại trên lúa.', image: 'https://img.khetivyapar.com/images/webstory/1-leaf-blight-leaves-dry-from-the-top-and-show-ash-like-spots-1752566076.jpg', imageAlt: 'Lá lúa có dấu hiệu bệnh hại', imageSource: { label: 'KhetiVyapar', url: 'https://www.khetivyapar.com/en/web-story/5-major-diseases-that-destroy-paddy-know-the-exact-cure' }, isDemo: true },
    { id: 'research-project-003', icon: 'fa-lungs', title: 'Hệ hỗ trợ chẩn đoán bệnh phổi tắc nghẽn mạn tính (COPD)', status: 'Định hướng nghiên cứu', fields: ['Health Informatics', 'Decision Support System', 'AI'], description: 'Tìm hiểu phương pháp ứng dụng công nghệ thông tin và AI trong xây dựng hệ hỗ trợ chẩn đoán y khoa.', image: 'https://www.clevelandclinicabudhabi.ae/PublishingImages/health%20advice/smaller%20images/ccad-blog-COPD-en.png', imageAlt: 'Minh họa phổi và bệnh COPD', imageSource: { label: 'Cleveland Clinic Abu Dhabi', url: 'https://www.clevelandclinicabudhabi.ae/en/health-byte/pages/chronic-obstructive-pulmonary-disorder-copd-explained.aspx' }, isDemo: true }
  ],
  researchProducts: [
    { id: 'research-product-001', icon: 'fa-fish', title: 'Ứng dụng CNTT và Trí tuệ nhân tạo trong chuyển đổi số nông nghiệp, thuỷ sản', tags: ['AI', 'Chuyển đổi số'], type: 'Research & Development', description: 'Nghiên cứu ứng dụng công nghệ thông tin và trí tuệ nhân tạo vào chuyển đổi số trong lĩnh vực nông nghiệp, thuỷ sản.', isDemo: false, links: [] },
    { id: 'research-product-002', icon: 'fa-wheat-awn', title: 'Ứng dụng Trí tuệ nhân tạo trong phân tích bệnh trên lá lúa thông qua hình ảnh', tags: ['AI', 'Computer Vision'], type: 'AI Research', description: 'Nghiên cứu ứng dụng trí tuệ nhân tạo và phân tích hình ảnh để hỗ trợ nhận diện, phân tích bệnh trên lá lúa.', isDemo: false, links: [] },
    { id: 'research-product-003', icon: 'fa-laptop-code', title: 'Ứng dụng CNTT trong chuyển đổi số kinh doanh phần mềm tại CUSC', tags: ['CNTT', 'Business Analysis'], type: 'Digital Transformation', description: 'Nghiên cứu ứng dụng công nghệ thông tin vào chuyển đổi số hoạt động kinh doanh phần mềm tại CUSC.', isDemo: false, links: [] }
  ]
};

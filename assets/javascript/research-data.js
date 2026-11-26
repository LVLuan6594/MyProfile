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
    academicActivities: 5
  },
  researchInterests: [
    { id: 'software-engineering', icon: 'fa-code', title: 'Kỹ thuật phần mềm', subtitle: 'Software Engineering', details: ['Kiến trúc phần mềm', 'Phân tích và thiết kế hệ thống', 'Chất lượng phần mềm'] },
    { id: 'artificial-intelligence', icon: 'fa-microchip', title: 'Trí tuệ nhân tạo', subtitle: 'Artificial Intelligence', details: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Multimodal Learning'] },
    { id: 'edge-computing', icon: 'fa-layer-group', title: 'Điện toán biên', subtitle: 'Edge Computing', details: ['Distributed Systems', 'Edge Computing', 'Hiệu năng hệ thống'] },
    { id: 'digital-transformation', icon: 'fa-database', title: 'Chuyển đổi số', subtitle: 'Digital Transformation', details: ['Nền tảng số', 'GIS', 'Quản trị và phân tích dữ liệu'] },
    { id: 'ai-agriculture', icon: 'fa-leaf', title: 'AI trong nông nghiệp', subtitle: 'AI in Agriculture', details: ['Nhận diện bệnh hại cây trồng', 'Phân tích dữ liệu nông nghiệp', 'Ứng dụng AI trong sản xuất'] },
    { id: 'health-informatics', icon: 'fa-heart-pulse', title: 'Tin học y tế', subtitle: 'Health Informatics', details: ['Hệ hỗ trợ ra quyết định', 'Hỗ trợ chẩn đoán', 'Ứng dụng AI trong y tế'] }
  ],
  publications: [
    {
      id: 'publication-001', title: 'Nghiên cứu xây dựng hệ thống ... (tạm thời)',
      authors: ['Nguyễn Văn A', 'Lê Vũ Luân', 'Trần Thị B'], authorRole: 'Đồng tác giả · đứng thứ hai',
      type: 'Tạp chí', venue: 'SDMD 2045', year: null, pages: '129', doi: '', abstract: 'Nội dung Abstract đang chờ cập nhật theo ấn phẩm chính thức.', keywords: [], image: '', pdfUrl: '', publicationUrl: 'https://sdmd2045.ctu.edu.vn/upload/thanhtuu2526/', codeUrl: '', isDemo: true
    },
    {
      id: 'publication-002', title: 'A Decision Support System for COPD Diagnosis Using Machine Learning',
      authors: ['Lê Vũ Luân', 'Phạm Văn C', 'Võ Thị D'], authorRole: 'Tác giả thứ nhất',
      type: 'Tạp chí', venue: 'Journal of Information Technology and Applications', year: 2024, pages: '', doi: '', abstract: 'Nội dung minh họa về việc ứng dụng Machine Learning để hỗ trợ phân tích và chẩn đoán COPD. Đây là dữ liệu mẫu, chưa phải công bố đã xác minh.', keywords: ['Machine Learning', 'Health Informatics'], image: '', pdfUrl: '', publicationUrl: '', codeUrl: '', isDemo: true
    }
  ],
  researchProjects: [
    { id: 'research-project-001', icon: 'fa-wheat-awn', title: 'Phát hiện bệnh hại trên lúa bằng học sâu đa mô thức', status: 'Đang nghiên cứu', fields: ['Artificial Intelligence', 'Multimodal Learning', 'Computer Vision'], description: 'Nghiên cứu khả năng kết hợp nhiều nguồn thông tin để hỗ trợ phát hiện và phân loại bệnh hại trên lúa.', isDemo: true },
    { id: 'research-project-002', icon: 'fa-cloud', title: 'Nghiên cứu điện toán biên (Edge Computing)', status: 'Đang tìm hiểu', fields: ['Edge Computing', 'Distributed Systems'], description: 'Tìm hiểu các mô hình xử lý dữ liệu tại biên, hiệu năng hệ thống, độ trễ và phân bổ tài nguyên tính toán.', isDemo: true },
    { id: 'research-project-003', icon: 'fa-lungs', title: 'Hệ hỗ trợ chẩn đoán bệnh phổi tắc nghẽn mạn tính (COPD)', status: 'Định hướng nghiên cứu', fields: ['Health Informatics', 'Decision Support System', 'AI'], description: 'Tìm hiểu phương pháp ứng dụng công nghệ thông tin và AI trong xây dựng hệ hỗ trợ chẩn đoán y khoa.', isDemo: true }
  ],
  researchProducts: [
    { id: 'research-product-001', icon: 'fa-laptop-code', title: 'Thực nghiệm phân loại bệnh lá lúa', tags: ['AI/ML'], type: 'Experiment', description: 'Giao diện thử nghiệm phân loại ảnh lá lúa.', isDemo: true },
    { id: 'research-product-002', icon: 'fa-chart-line', title: 'Mô phỏng và đánh giá hiệu năng hệ thống Edge', tags: ['Simulation'], type: 'Benchmark', description: 'Biểu đồ kết quả mô phỏng hiệu năng hệ thống.', isDemo: true },
    { id: 'research-product-003', icon: 'fa-diagram-project', title: 'Công cụ trực quan hóa Automata & Regular Expression', tags: ['Education'], type: 'Algorithm', description: 'Sơ đồ trạng thái Finite Automata phục vụ học tập và nghiên cứu.', isDemo: true },
    { id: 'research-product-004', icon: 'fa-chart-pie', title: 'Nguyên mẫu hệ hỗ trợ ra quyết định', tags: ['Prototype'], type: 'Web Application', description: 'Giao diện nguyên mẫu phân tích dữ liệu và hỗ trợ ra quyết định.', isDemo: true }
  ]
};

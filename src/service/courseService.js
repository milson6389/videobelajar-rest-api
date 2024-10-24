import { ResponseError } from "../error/responseError.js";

const DataKelas = [
  {
    id: 1,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Senior Market Analyst",
    lecturerDesc:
      "Berkarier di bidang Marketing selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Market Analyst di Startup selama hampir 1 tahun",
    thumbnail:
      "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&w=1831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Marketing: 101",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Pemasaran",
    rating: 3,
    price: 300,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    lecturerName: "Ortega",
    lecturerTitle: "Accountant",
    lecturerDesc:
      "Berkarier di bidang Marketing selama lebih dari 3 tahun. Saat ini bekerja sebagai Accountant di Startup selama hampir 1 tahun",
    thumbnail:
      "https://images.unsplash.com/photo-1510247548804-1a5c6f550b2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Market Research Guide",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Pemasaran",
    rating: 4,
    price: 250,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Creative Designer Team Lead",
    lecturerDesc:
      "Berkarier di bidang Designer selama lebih dari 3 tahun. Saat ini bekerja sebagai Creative Designer Team Lead di Startup selama hampir 1 tahun",
    thumbnail:
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UI/UX Design 101",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Desain",
    rating: 4,
    price: 100,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "CEO Startup",
    lecturerDesc: "Saat ini bekerja sebagai ceo dari sebuah startup yang telah beroperasi selama 3 tahun",
    thumbnail:
      "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Administration",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Bisnis",
    rating: 2,
    price: 300,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Certified ZEN",
    lecturerDesc:
      "Berkarier di bidang Self Development dan bertujuan untuk membagikan cara cara mencapai kehidupan yang ZEN",
    thumbnail:
      "https://images.unsplash.com/photo-1499728603263-13726abce5fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inner Peace",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Development",
    rating: 3,
    price: 175,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Certified ZEN",
    lecturerDesc:
      "Berkarier di bidang Self Development dan bertujuan untuk membagikan cara cara mencapai kehidupan yang ZEN",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666946131242-b2c5cc73892a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Balance: 101",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Development",
    rating: 2,
    price: 200,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Senior Technical Analyst",
    lecturerDesc:
      "Berkarier di Financial Market selama lebih dari 3 tahun. Saat ini bekerja sebagai full time trader dan technical analyst di sekuritas selama hampir 2 tahun",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Understanding Financial Market",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Bisnis",
    rating: 5,
    price: 400,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Adobe Certified Designer",
    lecturerDesc:
      "Berkarier di bidang Designer selama lebih dari 3 tahun. Saat ini bekerja sebagai Adobe Certified Designer di Startup selama hampir 1 tahun",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "XD Design Certification",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Desain",
    rating: 3,
    price: 500,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    lecturerName: "Jenna Ortega",
    lecturerTitle: "Market Research Lead",
    lecturerDesc:
      "Berkarier di bidang Marketing selama lebih dari 3 tahun. Saat ini bekerja sebagai Market Research Lead di Startup selama hampir 1 tahun",
    thumbnail:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Marketing",
    desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    category: "Pemasaran",
    rating: 3,
    price: 85,
    materials: [
      {
        id: 1,
        title: "Introduction Course",
        sub_material: [
          {
            title: "Intro 1",
            duration: 12,
          },
          {
            title: "Intro 2",
            duration: 8,
          },
          {
            title: "Intro 3",
            duration: 20,
          },
        ],
      },
      {
        id: 2,
        title: "Basic Course",
        sub_material: [
          {
            title: "Basic 1",
            duration: 12,
          },
          {
            title: "Basic 2",
            duration: 8,
          },
        ],
      },
      {
        id: 3,
        title: "Advance Course",
        sub_material: [
          {
            title: "Advance 1",
            duration: 12,
          },
          {
            title: "Advance 2",
            duration: 8,
          },
          {
            title: "Advance 3",
            duration: 20,
          },
          {
            title: "Advance 4",
            duration: 5,
          },
        ],
      },
    ],
  },
];

const paidCourse = [];

const addKelasToPaidCourse = (courseId, userInfo) => {
  const selectedClass = DataKelas.find((kelas) => kelas.id == courseId);
  if (!selectedClass) {
    throw new ResponseError(404, "Course Not Found");
  }
  const newCourse = {
    user: userInfo,
    ...selectedClass,
  };

  paidCourse.push(newCourse);
  return newCourse;
};

const getAllKelas = async () => {
  return DataKelas;
};

const getAllPaidKelas = async (userId) => {
  const userPaidCourse = paidCourse.filter((course) => course.user == userId);
  return userPaidCourse;
};

const getKelasById = (courseId) => {
  const selectedClass = DataKelas.find((kelas) => kelas.id == courseId);
  if (!selectedClass) {
    throw new ResponseError(404, "Course Not Found");
  }
  return selectedClass;
};

export default {
  addKelasToPaidCourse,
  getAllKelas,
  getAllPaidKelas,
  getKelasById,
};

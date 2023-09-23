const chatList = [
  {
    id: 1,
    name: 'Leonardo',
    lastMessage: 'Este es un clon de whatsapp',
    unread: 0,
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    date: new Date(),
  },
  {
    id: 2,
    name: 'Tony',
    lastMessage: '¿Qué es JSON?',
    unread: 2,
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    date: new Date(),
  },
  {
    id: 3,
    name: 'Juan',
    lastMessage: 'Hola mundo',
    unread: 1,
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    date: new Date(),
  },
];

export const messages = [
  {
    id: 1,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    sender: 1,
  },
  {
    id: 2,
    message: 'Hola esto es una respuesta',
    sender: 2,
  },
  {
    id: 3,
    message: 'Hola mundo',
    sender: 1,
  },
  {
    id: 4,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    sender: 2,
  },
];

export default chatList;

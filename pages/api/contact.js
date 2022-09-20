import { MongoClient } from 'mongodb';

async function handler(req, res) {
  // 요청 메서드를 확인하고, 데이터추출도 한다.
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    // 클라이언트 유효성 검사는 신뢰 할 수 없기 때문에 서버에서 한번 유효성 검사를 해준다.
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    // 데이터베이스에 저장
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://kokyusik91:KEhQQvZ6LKtTict0@cluster0.nxel9nj.mongodb.net/my-site?retryWrites=true&w=majority',
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    // 성공시에도 db를 닫는다.
    client.close();

    res.status(201).json({
      message: 'Successfully stored message!',
      message: newMessage,
    });
  }
}

export default handler;

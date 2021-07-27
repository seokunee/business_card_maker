import { firebaseDatabase } from "./firebase";

class CardRepository {
  writeUserData = (card, userId) => {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  };

  readUserData = (userId, onUpdate) => {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => ref.off();
    //off 하는 이유: on()이 계속 변화를 감지하기 때문에 네트워크 사용량이 많아진다. 그래서 sync를 멈추는 함수를 리턴하여서 다른 컴포넌트
    //에서 사용할 수 있도록 해준다.
  };

  removeUserData = (id, userId) => {
    firebaseDatabase.ref(`${userId}/cards/${id}`).set(null);
  };
}

export default CardRepository;

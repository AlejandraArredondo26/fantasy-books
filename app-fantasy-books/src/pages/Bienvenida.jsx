import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent 
} from '@ionic/react';

export default function Bienvenida() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenida</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>✨ Bienvenido al Reino de la Fantasía</h2>
        <p>
          Adéntrate en mundos mágicos llenos de dragones, magos, portales y criaturas
          extraordinarias. 📚✨  
        </p>
        <p>
          En esta aplicación podrás:
        </p>
        <ul>
          <li>Explorar sagas y universos épicos 🌌</li>
          <li>Descubrir autores que marcaron generaciones ✍️</li>
          <li>Comentar y compartir tu experiencia lectora 💬</li>
          <li>Conocer más sobre la historia de la fantasía 📖</li>
        </ul>
        <p>
          ¡Prepárate para un viaje literario inolvidable! 🚀
        </p>
      </IonContent>
    </IonPage>
  );
}

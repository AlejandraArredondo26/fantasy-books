import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonAlert
} from '@ionic/react';

export default function Comentarios() {
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEnviarComentario = () => {
    if (nuevoComentario.trim() === '') {
      setAlertMessage('Por favor, escribe tu opinión antes de enviarla.');
      setShowAlert(true);
      return;
    }

    console.log('Comentario enviado:', nuevoComentario);
    setAlertMessage('¡Gracias por tu aporte! Tu comentario ha sido registrado.');
    setShowAlert(true);
    setNuevoComentario('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Comentarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Deja tu Opinión</h2>
        <p>¿Cuál es tu libro de fantasía favorito? ¿Qué te pareció nuestra selección?</p>

        <IonItem className="ion-margin-top">
          <IonLabel position="floating">Tu Comentario</IonLabel>
          <IonTextarea
            value={nuevoComentario}
            onIonChange={e => setNuevoComentario(e.detail.value || '')}
            rows={6}
            placeholder="Escribe aquí tu reseña o pensamiento..."
          />
        </IonItem>

        <IonButton expand="block" onClick={handleEnviarComentario} className="ion-margin-top">
          Enviar
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Comentario'}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}

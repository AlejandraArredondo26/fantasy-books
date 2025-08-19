import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton 
} from '@ionic/react';

export default function Contacto() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>📬 Ponte en contacto con nosotros</h2>
        <p>
          ¿Tienes alguna recomendación de saga, autor o libro de fantasía que quieras compartir?
          Escríbenos y únete a la comunidad de lectores mágicos ✨.
        </p>

        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput placeholder="Escribe tu nombre" />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Correo electrónico</IonLabel>
          <IonInput type="email" placeholder="ejemplo@correo.com" />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Mensaje</IonLabel>
          <IonTextarea placeholder="Cuéntanos sobre tu libro o saga favorita..." />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" color="primary">
          Enviar mensaje
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

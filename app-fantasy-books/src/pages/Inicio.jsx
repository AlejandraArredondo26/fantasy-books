import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonLabel 
} from '@ionic/react';

export default function Inicio() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonTabs>
          <IonTabBar>
            <IonTabButton tab="bienvenida">
              <IonLabel>Bienvenida</IonLabel>
            </IonTabButton>
            <IonTabButton tab="explora">
              <IonLabel>Explora</IonLabel>
            </IonTabButton>
            <IonTabButton tab="comentarios">
              <IonLabel>Comentarios</IonLabel>
            </IonTabButton>
            <IonTabButton tab="acerca">
              <IonLabel>Acerca</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        <p>✨ Bienvenido al reino de los <strong>Libros de Fantasía</strong>.  
        Aquí podrás explorar sagas mágicas, compartir tus opiniones y conocer más sobre este mundo lleno de imaginación.</p>
      </IonContent>
    </IonPage>
  );
}

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton
} from '@ionic/react';

export default function Libros() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Libros de Fantasía</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        <IonCard>
          <IonImg src="https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg" />
          <IonCardHeader>
            <IonCardTitle>El Hobbit</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Una aventura épica escrita por J.R.R. Tolkien. Perfecto para adentrarse en el mundo de la Tierra Media.
            <IonButton expand="block" color="primary" className="ion-margin-top">
              Leer más
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg" />
          <IonCardHeader>
            <IonCardTitle>Harry Potter y la Piedra Filosofal</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            El inicio de la saga de Harry Potter. Un clásico moderno de la literatura fantástica juvenil.
            <IonButton expand="block" color="secondary" className="ion-margin-top">
              Leer más
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="https://hips.hearstapps.com/hmg-prod/images/juego-de-tronos-primera-temporada-1558599291.jpg" />
          <IonCardHeader>
            <IonCardTitle>Juego de Tronos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Primer libro de la saga *Canción de Hielo y Fuego* de George R.R. Martin, llena de intrigas y batallas.
            <IonButton expand="block" color="tertiary" className="ion-margin-top">
              Leer más
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
}

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent
} from '@ionic/react';

export default function Acerca() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Acerca del Proyecto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>📚 Mundo de Fantasía</h2>
        <p>
          Esta aplicación fue creada como un proyecto educativo para explorar el género de la fantasía literaria.
        </p>
        <p>
          Aquí encontrarás información sobre autores famosos como Tolkien, Rowling, Martin y Lewis, así como reseñas de
          sus libros más representativos.
        </p>
        <p>
          Nuestro objetivo es fomentar la lectura, la imaginación y la creatividad a través de los mundos mágicos que han inspirado a generaciones.
        </p>
        <p>
          ¡Gracias por explorar con nosotros este viaje a través de los libros de fantasía! 🌟
        </p>
      </IonContent>
    </IonPage>
  );
}

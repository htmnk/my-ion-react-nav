import React from 'react';

import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/react';

interface TechDetailProps {
  title: string;
  description: string;
  color: string;
  icon: string;
}

const TechDetail: React.FC<TechDetailProps> = ({ title, description, color, icon }) => {

  return (
    <>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonIcon size="large" icon={icon} style={{ color: `${color}` }} />
        <p>{description}</p>
      </IonContent>
    </>
  );
};

export default TechDetail
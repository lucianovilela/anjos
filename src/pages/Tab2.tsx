import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonInput,
  IonButton,
  IonSearchbar,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
//import ExploreContainer from '../components/ExploreContainer';
import "./Tab2.css";
import moment from "moment";
import { useState } from "react";

const Tab2: React.FC = () => {
  const handleChange = async (e) => {
    const consulta = await fetch(
      `https://signos-celebridades.herokuapp.com/celeb/${text}`
    ).then((r) => r.json());
    console.debug(consulta);
    if (!consulta.error) setResult(consulta);
  };
  const [text, setText] = useState<string>();
  const [result, setResult] = useState();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signos</IonTitle>
          <IonSearchbar
            placeholder="Pesquisa"
            inputMode="search"
            
            onIonChange={(e) => {
              setText(e.detail.value);
            }}
            debounce={10000}
            enterkeyhint="enter"
          />
          <IonButton onClick={handleChange}>Pesquisa</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {result ? (
          <IonCard>
            <IonCardHeader>
              <IonAvatar>
                <IonImg src={result.imagem} />
              </IonAvatar>
              <IonCardTitle>{result.nome}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonLabel>{result.signo}</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  {moment(result.dataNascimento).format("DD/MM/YYYY")}
                </IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ) : (
          <></>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

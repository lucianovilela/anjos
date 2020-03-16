import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonList, IonItem, IonLabel, IonAvatar, IonInput } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useContext, useState } from 'react';
import { DB }  from '../db/db'
import { SALMOS } from '../db/salmos'
import { ConsoleWriter } from 'istanbul-lib-report';


const Tab1: React.FC = () => {
  const [text, setText] = useState<string>();
  const handleChange = event => {
    setText(event.target.value);
  };
  const result = !text?
  DB:
  DB.filter(anjo =>{ 
    if(text.match(/\d+\/?\d+/)){
      return anjo.DN.includes(text);
    }
    else{
      return anjo.ANJO.toLowerCase().includes(text.toLowerCase());
    }
  });
  
  const itens =  result.map((i)=>
    <IonItem>
      <IonAvatar>
      </IonAvatar>
      <IonLabel>
        <h1>{i.ANJO}</h1>
        <h2>{i.QUALIDADE}</h2>   
        <p>{i.DN}</p> 
        <p>{i.PRINCIPE}</p>
        <p>{i.SALMO}</p>
      </IonLabel>    
    </IonItem>
  
  );


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Anjos</IonTitle>
          <IonInput placeholder="Pesquisa" clearInput inputMode="search" value={text} onIonChange={handleChange}/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Anjos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList >
          {itens}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

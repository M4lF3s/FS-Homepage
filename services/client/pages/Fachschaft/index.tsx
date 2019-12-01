import React, {Fragment, useEffect, useState} from 'react';
import Page from '../../layouts/main';
import styles from './fachschaft.module.scss';
import './fachschaft.global.scss';
import hero from '../../assets/img/fachschaft.png';
import politik from '../../assets/img/politik.png';

import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import { Headline4, Body1 } from '@material/react-typography';
import { ListDivider } from '@material/react-list';
import Button from '@material/react-button';


export default () => {

    return (
        <Fragment>
            <Page>
                <div className={styles.page}>
                    <div className={styles.hero}>
                        <img src={hero} />
                        <span>Unsere Fachschaftsarbeit</span>
                    </div>
                    <div className={styles.cardArea}>
                        <Card className={styles.card}>
                            <CardPrimaryContent>
                                <i className="material-icons mdc-button__icon" aria-hidden="true">school</i>
                                <Body1>Hochschulpolitik</Body1>
                            </CardPrimaryContent>
                            <CardActions className={styles.cardBtn}>
                                <CardActionButtons className={styles.btn}>
                                    <Button raised>Mehr Info</Button>
                                </CardActionButtons>
                            </CardActions>
                        </Card>
                        <Card className={styles.card}>
                            <CardPrimaryContent>
                                <i className="material-icons mdc-button__icon" aria-hidden="true">people</i>
                                <Body1>Erstsemesterbetreuung</Body1>
                            </CardPrimaryContent>
                            <CardActions className={styles.cardBtn}>
                                <CardActionButtons className={styles.btn}>
                                    <Button raised>Mehr Info</Button>
                                </CardActionButtons>
                            </CardActions>
                        </Card>
                        <Card className={styles.card}>
                            <CardPrimaryContent>
                                <i className="material-icons mdc-button__icon" aria-hidden="true">chat_bubble</i>
                                <Body1>Studierendenvertretung</Body1>
                            </CardPrimaryContent>
                            <CardActions className={styles.cardBtn}>
                                <CardActionButtons className={styles.btn}>
                                    <Button raised>Mehr Info</Button>
                                </CardActionButtons>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={styles.politik}>
                        <Card>
                            <CardPrimaryContent>
                                <CardMedia square imageUrl={politik} />
                                <i className="material-icons mdc-button__icon" aria-hidden="true">chat_bubble</i>
                                <Body1>Studierendenvertretung</Body1>
                            </CardPrimaryContent>
                            <CardActions className={styles.cardBtn}>
                                <CardActionButtons className={styles.btn}>
                                    <Button raised>Mehr Info</Button>
                                </CardActionButtons>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={styles.ersti}>
                        Erstsemesterbetreuung
                    </div>
                    <div className={styles.vertretung}>
                        Studierendenvertretung
                    </div>
                </div>
            </Page>

        </Fragment>
    )
}
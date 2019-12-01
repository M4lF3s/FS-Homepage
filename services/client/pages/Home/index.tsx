import React, {Fragment, useEffect, useState} from 'react';
import Page from '../../layouts/main';
import axios from 'axios';
import wpapi from 'wpapi';
import plakat from '../../assets/img/plakat.jpeg';
import styles from './home.module.scss';
import './home.global.scss';
import Link from 'next/link';
import {withRouter} from 'next/router';

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


export default withRouter((props) => {
    const [data, setData] = useState({ posts: [] });

    /*
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(wpapi({endpoint: '/api'}).pages())

            setData({posts: result.data});
        };

        fetchData();
    }, []);
     */

    return (
        <Fragment>
            <Page>
                <div className={styles.page}>
                    <div className={styles.plakat}>
                        <img src={plakat} />
                    </div>
                    <Card className={styles.text}>
                            <CardPrimaryContent>
                                <Headline4>Der Alberne Tross heißt dich herzlich Willkommen</Headline4>
                                <ListDivider tag="hr" />
                                <Body1>Der alberne Troß der Universität Bayreuth begrüßt dich recht herzlich. Wir hoffen du findest dich auf unseren Seiten gut zurecht. Falls du Fragen bzw. Anregungen an die Fachschaft richten möchtest, hier ist unsere E-Mail-Adresse: <br />fsmpi@uni-bayreuth.de <br />Alle aktuellen Informationen, Veranstaltungsankündigungen und fakultätsinterne Stellenausschreibungen findest du unter News.</Body1>
                            </CardPrimaryContent>
                            <CardActions>
                                <CardActionButtons className={styles.btnRow}>
                                    <Link href={'/Fachschaft'}>
                                    <Button raised>Weiter</Button>
                                    </Link>
                                </CardActionButtons>
                            </CardActions>
                        </Card>
                </div>
            </Page>

        </Fragment>
    )
})
import React, { Component } from 'react'
import styles from '../../styles/Certificate.module.css'
import Image from 'next/image'


export default class Certificate extends Component {
    render() {
        return (
            <div className={styles.container}>                
                <div className={styles.title}>
                    My Certificate
                </div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <Image src="/8.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/14.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/13.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/12.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/5.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/6.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/7.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/1.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/9.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/10.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/11.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/2.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/3.jpg" width="350px" height="230px" alt=""/>
                    </div>
                    <div className={styles.item}>
                        <Image src="/1.jpg" width="350px" height="230px" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

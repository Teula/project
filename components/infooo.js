import React, { useState } from "react";
import styles from "../styles/College.module.css";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Infooo(props) {
  const router = useRouter();
  return (
    <div>
      <section className={styles.Info}>
        <div className={styles.InfoGrid}>
          <div className={styles.InfoBox}>
            <div className={styles.InfoIcon}>
              <span className='material-symbols-outlined'>lock</span>
            </div>
            <p className={styles.InfoTitle}>Prerequisites</p>
            <ul className={styles.InfoList}>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
            </ul>
          </div>
          <div className={styles.InfoBox}>
            <div className={styles.InfoIcon}>
              <span className='material-symbols-outlined'>lock</span>
            </div>
            <p className={styles.InfoTitle}>Instructor</p>
            <ul className={styles.InfoList}>
              <li>Computer Science I</li>
              <li>Computer Science I</li>
              <li>Computer Science I</li>
            </ul>
          </div>
          <div className={styles.InfoBox}>
            <div className={styles.InfoIcon}>
              <span className='material-symbols-outlined'>lock</span>
            </div>
            <p className={styles.InfoTitle}>Unlock</p>
            <ul className={styles.InfoList}>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
              <li>
                <span className={styles.Code}>#1234</span> Computer Science I
              </li>
            </ul>
          </div>
          {/* <a href='#' className={styles.rateMee}>
            Rate Me
          </a> */}
          {/* <div className={styles.rateMe}>
            <Link
              href={`/college/${router.collegeId}/course/${router.course}/survey`}>
              Rate Me 1
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

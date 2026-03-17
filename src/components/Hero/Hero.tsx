import { motion } from 'framer-motion';
import Scene from './Scene';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Hero.module.css';
import pic from '../../assets/pic.jpg';


interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
}

export default function Hero({ 
  name = 'name', 
  title = 'title', 
  description = 'description'
}: HeroProps) {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.canvasContainer}>
        <Scene />
      </div>
      
      <div className={styles.content}>
        <motion.div
          className={styles.avatar}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.avatarPlaceholder}>
            <img src={pic}></img>
          </div>
        </motion.div>

        <motion.h1
          className={styles.name}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {title}
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow} />
      </motion.div>
    </section>
  );
}

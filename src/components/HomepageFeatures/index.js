import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/lightning.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Produces Easy to Read Code',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: 'Made for Developers',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureSvgTitle}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h4 className={styles.title}>Why WPN<span>?</span></h4>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

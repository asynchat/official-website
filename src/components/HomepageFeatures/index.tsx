import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '低代码开发',
    Svg: require('@site/static/img/easy-use.svg').default,
    description: (
      <>
        通过可视化工作流快速构建AI应用，无需编写代码，只需拖拽点击等操作即可发布与管理终端智能体应用，大幅降低开发门槛。
      </>
    ),
  },
  {
    title: '多终端触达',
    Svg: require('@site/static/img/keeping-updated.svg').default,
    description: (
      <>
        支持PC端、移动端、小程序等多终端无缝访问，同时提供本地服务器或专属云环境部署，数据全程封闭于客户内网，满足金融、政务等高安全要求场景。
      </>
    ),
  },
  {
    title: '多引擎无缝集成',
    Svg: require('@site/static/img/workflows.svg').default,
    description: (
      <>
        支持Coze、Dify等主流智能体开发平台的无缝接入，实现跨平台智能体的统一管理和调用，让企业轻松构建和扩展AI能力。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

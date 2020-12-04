import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { fadeIn } from '../../styles/keyframes';

interface IProps {
  className?: string;
}

const Component: React.FC<IProps> = ({ className }) => (
  <div className={className}>
    <div className="hero">
      <figure>
        <Image src="/assets/images/hero.png" alt="Hero image" height={450} width={600} quality={100} />
      </figure>
    </div>

    <div className="message">
      <h2 className="title font-family-en1">
        <span>Thank you for</span>
        <span>1st Anniversary</span>
      </h2>
      <div className="content">
        <div className="text">
          <p>ガラスの靴がぴったりとおさまるような瞬間を</p>
          <p>身につけた瞬間にときめきに満たされるような、そんなアクセサリーをお届けして366日。</p>
          <p>&nbsp;</p>
          <p>0:00は2020年に12月30日に1周年を迎えます。</p>
          <p>&nbsp;</p>
          <p>0:00を過ぎても解けることのない魔法をアクセサリーにこめて、たくさんの方にお届けしてきました。</p>
          <p>この1年の間、0:00は多くのお客様に支えられコラボ商品の制作や、渋谷でのポップアップショップ出店などをすることができました。</p>
          <p>&nbsp;</p>
          <p>これからもときめきに溢れた童話の世界をお届けしていきます。</p>
        </div>
        <figure className="image">
          <Image src="/assets/images/crystal.png" alt="Crystal image" height={360} width={360} quality={100} />
        </figure>
      </div>
    </div>

    <div className="photos">
      <figure>
        <Image src="/assets/images/photos.png" alt="End image" height={1200} width={1200} quality={100} />
      </figure>
    </div>

    <div className="message">
      <h2 className="title font-family-en1">
        <span>Anniversary</span>
        <span>Campaign</span>
      </h2>
      <div className="content">
        <div className="text">
          <p>1周年を迎えられたのは、支えてくださるお客様のおかげです。</p>
          <p>たくさんの感想や喜びの声、いつも1つ1つ読ませていただいております。</p>
          <p>いつも応援してくださるみなさまに、心より感謝を込めて4つのアニバーサリーキャンペーンを用意いたしました。</p>
          <p>みなさまのもとへいつまでも解けない魔法が届きますように。</p>
        </div>
        <figure className="image">
          <Image src="/assets/images/crystal.png" alt="Crystal image" height={360} width={360} quality={100} />
        </figure>
      </div>
    </div>

    <div className="campaign">
      <figure>
        <Image src="/assets/images/campaign-1.png" alt="Campaign image" height={772} width={1080} quality={100} />
      </figure>
      <div>
        <p className="subtitle font-family-en1">Campaign 1</p>
        <h3 className="title font-family-ja2">限定アイテム</h3>
        <div className="text font-family-ja2">
          <p>1stアニバーサリー限定のアイテムが登場。</p>
          <p>今回だけの特別デザインや、</p>
          <p>期間限定でイニシャルを入れることができる</p>
          <p>アクセサリーをお届けします。</p>
        </div>
        <div className="link">
          <a className="active" href="https://zero3.me/posts/f6e5cf9a-ea83-4098-a9a9-91bde5961c59">
            詳しく見る
          </a>
        </div>
      </div>
    </div>

    <div className="campaign">
      <figure>
        <Image src="/assets/images/campaign-2.png" alt="Campaign image" height={796} width={1080} quality={100} />
      </figure>
      <div>
        <p className="subtitle font-family-en1">Campaign 2</p>
        <h3 className="title font-family-ja2">限定童話セット</h3>
        <div className="text font-family-ja2">
          <p>同じ童話シリーズのアイテムを2点以上購入すると、</p>
          <p>限定ノベルティとしてベロア巾着と</p>
          <p>童話ごとにカラーの異なるリングをプレゼント。</p>
        </div>
        <div className="link">
          <a className="active" href="https://zero3.me/posts/7313f95a-90f7-4e5e-9199-9fcf645143b7">
            詳しく見る
          </a>
        </div>
      </div>
    </div>

    <div className="campaign">
      <figure>
        <Image src="/assets/images/campaign-3.png" alt="Campaign image" height={793} width={1080} quality={100} />
      </figure>
      <div>
        <p className="subtitle font-family-en1">Campaign 3</p>
        <h3 className="title font-family-ja2">ネットプリントステッカー</h3>
        <div className="text font-family-ja2">
          <p>ネットプリントで印刷できる限定ステッカーを配布。</p>
          <p>スマホケースやノートに張って、</p>
          <p>0:00をさらにお楽しみください。</p>
        </div>
        <div className="link">
          <span className="disable">COMING SOON</span>
        </div>
      </div>
    </div>

    <div className="campaign">
      <figure>
        <Image src="/assets/images/campaign-4.png" alt="Campaign image" height={797} width={1080} quality={100} />
      </figure>
      <div>
        <p className="subtitle font-family-en1">Campaign 4</p>
        <h3 className="title font-family-ja2">SNSキャンペーン</h3>
        <div className="text font-family-ja2">
          <p>日頃の感謝を込めてSNSキャンペーンを開催。</p>
          <p>簡単な応募でプレゼントがあたるチャンスです。</p>
          <p>詳細は各SNSからご覧ください。</p>
        </div>
        <div className="link">
          <span className="disable">COMING SOON</span>
        </div>
      </div>
    </div>

    <div className="divide">
      <figure>
        <Image src="/assets/images/crystal.png" alt="Crystal image" height={420} width={420} quality={100} />
      </figure>
    </div>

    <div className="end">
      <figure>
        <Image src="/assets/images/end.png" alt="End image" height={879} width={1080} quality={100} />
      </figure>
    </div>

    <div className="copyright">
      <p>&copy; 0:00 All rights reserved</p>
    </div>
  </div>
);

export const Home = styled(Component)`
  --side-margin: 48px;
  animation: 3s ${fadeIn} forwards;

  > .hero {
    margin: 64px 32px;
    > figure {
      text-align: center;
    }
  }

  > .message {
    margin: 0 var(--side-margin) 64px;
    > .title {
      color: #545454;
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 0.05em;
      margin-bottom: 40px;
      > span {
        display: block;
        white-space: nowrap;
      }
    }
    > .content {
      position: relative;
      > .text {
        > p {
          font-size: 10px;
          line-height: 28px;
          letter-spacing: 0.15em;
        }
        padding-bottom: 120px;
      }
      > .image {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 80%;
        opacity: 0.2;
        text-align: right;
      }
    }
  }

  > .photos {
    margin: 0 1px 64px;
  }

  > .campaign {
    margin: 0 var(--side-margin) 96px;
    > figure {
      margin: 0 24px 48px;
    }
    > div {
      > .subtitle {
        font-size: 16px;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
      }
      > .title {
        color: #454545;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.1em;
        margin-bottom: 20px;
      }
      > .text {
        margin-bottom: 32px;
        > p {
          color: #454545;
          font-size: 9px;
          line-height: 24px;
          letter-spacing: 0.3em;
        }
      }
      > .link {
        > a,
        span {
          cursor: pointer;
          &.active {
            background-color: #c0dae9;
            color: #fff;
            :hover {
              opacity: 0.8;
            }
          }
          &.disable {
            cursor: not-allowed;
            background-color: #ccc;
            color: #fff;
          }
          border-radius: 2px;
          font-size: 9px;
          letter-spacing: 0.25em;
          padding: 12px 48px;
        }
      }
    }
  }

  > .divide {
    margin: -128px var(--side-margin) 90px;
    > figure {
      opacity: 0.2;
      margin-left: 20%;
    }
  }

  > .end {
    margin: 0 var(--side-margin) 64px;
  }

  > .copyright {
    margin: 42px 0;
    > p {
      color: #333;
      font-size: 9px;
      text-align: center;
      letter-spacing: 0.1em;
    }
  }

  @media (min-width: 768px) {
    max-width: 1080px;
    margin: 0 auto;

    > .hero {
      margin: 120px 0;
    }

    > .message {
      margin-bottom: 150px;
      > .title {
        font-size: 48px;
        line-height: 96px;
        > span {
          display: inline;
          ::after {
            content: ' ';
          }
          :last-child {
            ::after {
              content: '';
            }
          }
        }
      }
      > .content {
        position: relative;
        > .text {
          > p {
            font-size: 12px;
            line-height: 36px;
          }
        }
      }
    }

    > .photos {
      margin-bottom: 150px;
    }

    > .campaign {
      margin-bottom: 150px;
      display: flex;
      align-items: center;
      > figure {
        width: 400px;
        min-width: 400px;
      }
      > div {
        margin-left: 90px;
        > .subtitle {
          font-size: 20px;
          margin-bottom: 20px;
        }
        > .title {
          font-size: 24px;
          margin-bottom: 36px;
        }
        > .text {
          margin-bottom: 42px;
          > p {
            font-size: 12px;
            line-height: 32px;
          }
        }
        > .link {
          a,
          span {
            font-size: 12px;
            padding: 16px 56px;
          }
        }
      }
    }

    > .divide {
      margin: -240px 0 150px;
      > figure {
        opacity: 0.2;
        margin: 0;
        text-align: right;
      }
    }

    > .end {
      margin: 0 240px 150px;
    }

    > .copyright {
      > p {
        font-size: 11px;
      }
    }
  }
`;

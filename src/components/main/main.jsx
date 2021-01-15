import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FitText,
  useConfig,
  useTemplateVal,
} from '@dsplay/react-template-utils';
import './main.sass';
import Timer from '../timer/timer';

function Main() {
  const config = useConfig();
  const { locale } = config;
  const { i18n } = useTranslation();
  i18n.changeLanguage(locale);
  const background = useTemplateVal('background');
  const titleColor = useTemplateVal('title_text_color');

  return (
    <div
      className={`main ${useTemplateVal('theme')}`}
      style={{ background: `url(${background})` }}
    >
      <div className="ds-container">
        <div className="ds-grid-item countdown-cta"
        style={{ color: `${titleColor}` }}
        >
          <FitText>{useTemplateVal('call_to_action_title')}</FitText>
        </div>
        <Timer timeTillDate={useTemplateVal('time_till_date')} timeFormat="DD MM YYYY, h:mm a" />
      </div>
    </div>
  );
}

export default Main;

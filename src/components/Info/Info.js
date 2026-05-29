import { Grid, Column } from '@carbon/react';

export function InfoSection({ heading, children, ...rest }) {
  return (
    <Grid {...rest}>
      <Column lg={4} md={2} sm={4}>
        <h3 className="landing-page__label">{heading}</h3>
      </Column>
      {children}
    </Grid>
  );
}

export function InfoCard({ heading, body, icon: Icon }) {
  return (
    <Column lg={4} md={4} sm={4} className="info-card">
      <div className="info-card__icon">{Icon && <Icon />}</div>
      <h4 className="info-card__heading">{heading}</h4>
      <p className="info-card__body">{body}</p>
    </Column>
  );
}

// Made with Bob

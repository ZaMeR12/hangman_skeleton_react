import { Card, Grid, Link, Typography } from "@mui/material";
import { LinkColor, PrimaryTextColor } from "../../styles/base.style";
import { FormattedMessage } from "react-intl";
import React from "react";

/**
 * React component to display the sources of the hangman's images.
 *
 * @return {JSX.Element} React Component.
 */
const HangmanImgSources = (): JSX.Element => {
  return (
    <Card style={{ backgroundColor: "var(--foreground-color)" }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="sub">
            <PrimaryTextColor>
              <FormattedMessage
                id="title_img_sources"
                defaultMessage="Images sources:"
              />
            </PrimaryTextColor>
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href="https://pixabay.com/fr/vectors/nouer-semparant-attelage-%C3%A9pissure-145493/"
            target="_blank"
          >
            <LinkColor>
              <FormattedMessage id="title_knot_img" defaultMessage="Knot" />
            </LinkColor>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <React.Fragment></React.Fragment>
        </Grid>
        <Grid item>
          <Link
            href="https://pixabay.com/fr/vectors/squelette-halloween-sorci%C3%A8re-corps-151170/"
            target="_blank"
          >
            <LinkColor>
              <FormattedMessage
                id="title_skeleton_img"
                defaultMessage="Skeleton"
              />
            </LinkColor>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HangmanImgSources;

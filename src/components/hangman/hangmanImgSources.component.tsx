import { Card, Grid, Link, Typography } from "@mui/material";
import { LinkColor, PrimaryTextColor } from "../../styles/base.style";

interface IHangmanImgSourcesProps {}

const HangmanImgSources = (props: IHangmanImgSourcesProps) => {
  return (
    <Card style={{ backgroundColor: "var(--foreground-color)" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="sub">
            <PrimaryTextColor>Images sources:</PrimaryTextColor>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Link
            href="https://pixabay.com/fr/vectors/nouer-semparant-attelage-%C3%A9pissure-145493/"
            target="_blank"
          >
            <LinkColor>Knot</LinkColor>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link
            href="https://pixabay.com/fr/vectors/squelette-halloween-sorci%C3%A8re-corps-151170/"
            target="_blank"
          >
            <LinkColor>Skeleton</LinkColor>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HangmanImgSources;

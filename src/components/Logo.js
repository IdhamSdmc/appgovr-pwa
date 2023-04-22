import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 80, height: 80, ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        zoomAndPan="magnify"
        viewBox="0 0 1024.5 576"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="3b179a9b96">
            <path d="M 133 10.144531 L 706 10.144531 L 706 382 L 133 382 Z M 133 10.144531 " clipRule="nonzero" />
          </clipPath>
          <clipPath id="3aec070272">
            <path
              d="M 705.722656 104.289062 L 133.710938 381.992188 L 133.710938 194.207031 L 512.835938 10.144531 Z M 705.722656 104.289062 "
              clipRule="nonzero"
            />
          </clipPath>
          <linearGradient
            x1="-19.395187"
            gradientTransform="matrix(1.515778, 0, 0, 1.514718, 133.709768, 10.144595)"
            y1="33.557867"
            x2="369.840212"
            gradientUnits="userSpaceOnUse"
            y2="258.521301"
            id="c3b9a88bb7"
          >
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.25" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.273245" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.28125" />
            <stop stopOpacity="1" stopColor="rgb(79.541016%, 42.38739%, 90.185547%)" offset="0.296875" />
            <stop stopOpacity="1" stopColor="rgb(79.119873%, 42.301941%, 90.087891%)" offset="0.300781" />
            <stop stopOpacity="1" stopColor="rgb(78.755188%, 42.228699%, 90.003967%)" offset="0.304688" />
            <stop stopOpacity="1" stopColor="rgb(78.390503%, 42.153931%, 89.918518%)" offset="0.308594" />
            <stop stopOpacity="1" stopColor="rgb(78.027344%, 42.080688%, 89.834595%)" offset="0.3125" />
            <stop stopOpacity="1" stopColor="rgb(77.662659%, 42.007446%, 89.749146%)" offset="0.316406" />
            <stop stopOpacity="1" stopColor="rgb(77.297974%, 41.934204%, 89.665222%)" offset="0.320312" />
            <stop stopOpacity="1" stopColor="rgb(76.933289%, 41.859436%, 89.579773%)" offset="0.324219" />
            <stop stopOpacity="1" stopColor="rgb(76.568604%, 41.786194%, 89.49585%)" offset="0.328125" />
            <stop stopOpacity="1" stopColor="rgb(76.203918%, 41.711426%, 89.411926%)" offset="0.332031" />
            <stop stopOpacity="1" stopColor="rgb(75.840759%, 41.638184%, 89.328003%)" offset="0.335938" />
            <stop stopOpacity="1" stopColor="rgb(75.476074%, 41.564941%, 89.242554%)" offset="0.339844" />
            <stop stopOpacity="1" stopColor="rgb(75.111389%, 41.491699%, 89.15863%)" offset="0.34375" />
            <stop stopOpacity="1" stopColor="rgb(74.746704%, 41.416931%, 89.073181%)" offset="0.347656" />
            <stop stopOpacity="1" stopColor="rgb(74.382019%, 41.343689%, 88.989258%)" offset="0.351562" />
            <stop stopOpacity="1" stopColor="rgb(74.017334%, 41.268921%, 88.903809%)" offset="0.355469" />
            <stop stopOpacity="1" stopColor="rgb(73.654175%, 41.195679%, 88.819885%)" offset="0.359375" />
            <stop stopOpacity="1" stopColor="rgb(73.28949%, 41.122437%, 88.734436%)" offset="0.363281" />
            <stop stopOpacity="1" stopColor="rgb(72.924805%, 41.049194%, 88.650513%)" offset="0.367188" />
            <stop stopOpacity="1" stopColor="rgb(72.56012%, 40.974426%, 88.566589%)" offset="0.371094" />
            <stop stopOpacity="1" stopColor="rgb(72.195435%, 40.901184%, 88.482666%)" offset="0.375" />
            <stop stopOpacity="1" stopColor="rgb(71.83075%, 40.827942%, 88.397217%)" offset="0.378906" />
            <stop stopOpacity="1" stopColor="rgb(71.46759%, 40.7547%, 88.313293%)" offset="0.382812" />
            <stop stopOpacity="1" stopColor="rgb(71.102905%, 40.679932%, 88.227844%)" offset="0.386719" />
            <stop stopOpacity="1" stopColor="rgb(70.73822%, 40.606689%, 88.143921%)" offset="0.390625" />
            <stop stopOpacity="1" stopColor="rgb(70.373535%, 40.531921%, 88.058472%)" offset="0.394531" />
            <stop stopOpacity="1" stopColor="rgb(70.00885%, 40.458679%, 87.974548%)" offset="0.398437" />
            <stop stopOpacity="1" stopColor="rgb(69.644165%, 40.385437%, 87.889099%)" offset="0.402344" />
            <stop stopOpacity="1" stopColor="rgb(69.281006%, 40.312195%, 87.805176%)" offset="0.40625" />
            <stop stopOpacity="1" stopColor="rgb(68.916321%, 40.237427%, 87.721252%)" offset="0.410156" />
            <stop stopOpacity="1" stopColor="rgb(68.551636%, 40.164185%, 87.637329%)" offset="0.414062" />
            <stop stopOpacity="1" stopColor="rgb(68.186951%, 40.089417%, 87.55188%)" offset="0.417969" />
            <stop stopOpacity="1" stopColor="rgb(67.822266%, 40.016174%, 87.467957%)" offset="0.421875" />
            <stop stopOpacity="1" stopColor="rgb(67.457581%, 39.942932%, 87.382507%)" offset="0.425781" />
            <stop stopOpacity="1" stopColor="rgb(67.094421%, 39.86969%, 87.298584%)" offset="0.429687" />
            <stop stopOpacity="1" stopColor="rgb(66.729736%, 39.794922%, 87.213135%)" offset="0.433594" />
            <stop stopOpacity="1" stopColor="rgb(66.365051%, 39.72168%, 87.129211%)" offset="0.4375" />
            <stop stopOpacity="1" stopColor="rgb(66.000366%, 39.646912%, 87.043762%)" offset="0.441406" />
            <stop stopOpacity="1" stopColor="rgb(65.635681%, 39.573669%, 86.959839%)" offset="0.445312" />
            <stop stopOpacity="1" stopColor="rgb(65.270996%, 39.500427%, 86.875916%)" offset="0.449219" />
            <stop stopOpacity="1" stopColor="rgb(64.907837%, 39.427185%, 86.791992%)" offset="0.453125" />
            <stop stopOpacity="1" stopColor="rgb(64.543152%, 39.352417%, 86.706543%)" offset="0.457031" />
            <stop stopOpacity="1" stopColor="rgb(64.178467%, 39.279175%, 86.62262%)" offset="0.460937" />
            <stop stopOpacity="1" stopColor="rgb(63.813782%, 39.204407%, 86.53717%)" offset="0.464844" />
            <stop stopOpacity="1" stopColor="rgb(63.450623%, 39.131165%, 86.453247%)" offset="0.46875" />
            <stop stopOpacity="1" stopColor="rgb(63.085938%, 39.057922%, 86.367798%)" offset="0.472656" />
            <stop stopOpacity="1" stopColor="rgb(62.721252%, 38.98468%, 86.283875%)" offset="0.476562" />
            <stop stopOpacity="1" stopColor="rgb(62.356567%, 38.909912%, 86.198425%)" offset="0.480469" />
            <stop stopOpacity="1" stopColor="rgb(61.991882%, 38.83667%, 86.114502%)" offset="0.484375" />
            <stop stopOpacity="1" stopColor="rgb(61.627197%, 38.763428%, 86.030579%)" offset="0.488281" />
            <stop stopOpacity="1" stopColor="rgb(61.264038%, 38.690186%, 85.946655%)" offset="0.492187" />
            <stop stopOpacity="1" stopColor="rgb(60.899353%, 38.615417%, 85.861206%)" offset="0.496094" />
            <stop stopOpacity="1" stopColor="rgb(60.534668%, 38.542175%, 85.777283%)" offset="0.5" />
            <stop stopOpacity="1" stopColor="rgb(60.169983%, 38.467407%, 85.691833%)" offset="0.503906" />
            <stop stopOpacity="1" stopColor="rgb(59.805298%, 38.394165%, 85.60791%)" offset="0.507812" />
            <stop stopOpacity="1" stopColor="rgb(59.440613%, 38.320923%, 85.522461%)" offset="0.511719" />
            <stop stopOpacity="1" stopColor="rgb(59.077454%, 38.247681%, 85.438538%)" offset="0.515625" />
            <stop stopOpacity="1" stopColor="rgb(58.712769%, 38.172913%, 85.353088%)" offset="0.519531" />
            <stop stopOpacity="1" stopColor="rgb(58.348083%, 38.09967%, 85.269165%)" offset="0.523437" />
            <stop stopOpacity="1" stopColor="rgb(57.983398%, 38.024902%, 85.185242%)" offset="0.527344" />
            <stop stopOpacity="1" stopColor="rgb(57.618713%, 37.95166%, 85.101318%)" offset="0.53125" />
            <stop stopOpacity="1" stopColor="rgb(57.254028%, 37.878418%, 85.015869%)" offset="0.535156" />
            <stop stopOpacity="1" stopColor="rgb(56.890869%, 37.805176%, 84.931946%)" offset="0.539062" />
            <stop stopOpacity="1" stopColor="rgb(56.526184%, 37.730408%, 84.846497%)" offset="0.542969" />
            <stop stopOpacity="1" stopColor="rgb(56.161499%, 37.657166%, 84.762573%)" offset="0.546875" />
            <stop stopOpacity="1" stopColor="rgb(55.796814%, 37.582397%, 84.677124%)" offset="0.550781" />
            <stop stopOpacity="1" stopColor="rgb(55.432129%, 37.509155%, 84.593201%)" offset="0.554687" />
            <stop stopOpacity="1" stopColor="rgb(55.067444%, 37.435913%, 84.507751%)" offset="0.558594" />
            <stop stopOpacity="1" stopColor="rgb(54.704285%, 37.362671%, 84.423828%)" offset="0.5625" />
            <stop stopOpacity="1" stopColor="rgb(54.3396%, 37.287903%, 84.339905%)" offset="0.566406" />
            <stop stopOpacity="1" stopColor="rgb(53.974915%, 37.214661%, 84.255981%)" offset="0.570312" />
            <stop stopOpacity="1" stopColor="rgb(53.610229%, 37.141418%, 84.170532%)" offset="0.574219" />
            <stop stopOpacity="1" stopColor="rgb(53.245544%, 37.068176%, 84.086609%)" offset="0.578125" />
            <stop stopOpacity="1" stopColor="rgb(52.880859%, 36.993408%, 84.00116%)" offset="0.582031" />
            <stop stopOpacity="1" stopColor="rgb(52.5177%, 36.920166%, 83.917236%)" offset="0.585937" />
            <stop stopOpacity="1" stopColor="rgb(52.153015%, 36.845398%, 83.831787%)" offset="0.589844" />
            <stop stopOpacity="1" stopColor="rgb(51.78833%, 36.772156%, 83.747864%)" offset="0.59375" />
            <stop stopOpacity="1" stopColor="rgb(51.423645%, 36.698914%, 83.662415%)" offset="0.597656" />
            <stop stopOpacity="1" stopColor="rgb(51.05896%, 36.625671%, 83.578491%)" offset="0.601562" />
            <stop stopOpacity="1" stopColor="rgb(50.694275%, 36.550903%, 83.494568%)" offset="0.605469" />
            <stop stopOpacity="1" stopColor="rgb(50.331116%, 36.477661%, 83.410645%)" offset="0.609375" />
            <stop stopOpacity="1" stopColor="rgb(49.966431%, 36.402893%, 83.325195%)" offset="0.613281" />
            <stop stopOpacity="1" stopColor="rgb(49.601746%, 36.329651%, 83.241272%)" offset="0.617187" />
            <stop stopOpacity="1" stopColor="rgb(49.237061%, 36.256409%, 83.155823%)" offset="0.621094" />
            <stop stopOpacity="1" stopColor="rgb(48.872375%, 36.183167%, 83.071899%)" offset="0.625" />
            <stop stopOpacity="1" stopColor="rgb(48.50769%, 36.108398%, 82.98645%)" offset="0.628906" />
            <stop stopOpacity="1" stopColor="rgb(48.144531%, 36.035156%, 82.902527%)" offset="0.632812" />
            <stop stopOpacity="1" stopColor="rgb(47.779846%, 35.960388%, 82.817078%)" offset="0.636719" />
            <stop stopOpacity="1" stopColor="rgb(47.415161%, 35.887146%, 82.733154%)" offset="0.640625" />
            <stop stopOpacity="1" stopColor="rgb(47.050476%, 35.813904%, 82.649231%)" offset="0.644531" />
            <stop stopOpacity="1" stopColor="rgb(46.685791%, 35.740662%, 82.565308%)" offset="0.648437" />
            <stop stopOpacity="1" stopColor="rgb(46.321106%, 35.665894%, 82.479858%)" offset="0.652344" />
            <stop stopOpacity="1" stopColor="rgb(45.957947%, 35.592651%, 82.395935%)" offset="0.65625" />
            <stop stopOpacity="1" stopColor="rgb(45.593262%, 35.519409%, 82.310486%)" offset="0.660156" />
            <stop stopOpacity="1" stopColor="rgb(45.228577%, 35.446167%, 82.226562%)" offset="0.664062" />
            <stop stopOpacity="1" stopColor="rgb(44.863892%, 35.371399%, 82.141113%)" offset="0.667969" />
            <stop stopOpacity="1" stopColor="rgb(44.499207%, 35.298157%, 82.05719%)" offset="0.671875" />
            <stop stopOpacity="1" stopColor="rgb(44.134521%, 35.223389%, 81.973267%)" offset="0.675781" />
            <stop stopOpacity="1" stopColor="rgb(43.771362%, 35.150146%, 81.889343%)" offset="0.679687" />
            <stop stopOpacity="1" stopColor="rgb(43.406677%, 35.076904%, 81.803894%)" offset="0.683594" />
            <stop stopOpacity="1" stopColor="rgb(43.041992%, 35.003662%, 81.719971%)" offset="0.6875" />
            <stop stopOpacity="1" stopColor="rgb(42.677307%, 34.928894%, 81.634521%)" offset="0.691406" />
            <stop stopOpacity="1" stopColor="rgb(42.314148%, 34.855652%, 81.550598%)" offset="0.695312" />
            <stop stopOpacity="1" stopColor="rgb(41.949463%, 34.780884%, 81.465149%)" offset="0.699219" />
            <stop stopOpacity="1" stopColor="rgb(41.584778%, 34.707642%, 81.381226%)" offset="0.703125" />
            <stop stopOpacity="1" stopColor="rgb(41.220093%, 34.634399%, 81.295776%)" offset="0.707031" />
            <stop stopOpacity="1" stopColor="rgb(40.855408%, 34.561157%, 81.211853%)" offset="0.710937" />
            <stop stopOpacity="1" stopColor="rgb(40.490723%, 34.486389%, 81.12793%)" offset="0.714844" />
            <stop stopOpacity="1" stopColor="rgb(40.127563%, 34.413147%, 81.044006%)" offset="0.71875" />
            <stop stopOpacity="1" stopColor="rgb(39.762878%, 34.338379%, 80.958557%)" offset="0.722656" />
            <stop stopOpacity="1" stopColor="rgb(39.398193%, 34.265137%, 80.874634%)" offset="0.726562" />
            <stop stopOpacity="1" stopColor="rgb(39.033508%, 34.191895%, 80.789185%)" offset="0.730469" />
            <stop stopOpacity="1" stopColor="rgb(38.668823%, 34.118652%, 80.705261%)" offset="0.734375" />
            <stop stopOpacity="1" stopColor="rgb(38.304138%, 34.043884%, 80.619812%)" offset="0.738281" />
            <stop stopOpacity="1" stopColor="rgb(37.940979%, 33.970642%, 80.535889%)" offset="0.742187" />
            <stop stopOpacity="1" stopColor="rgb(37.576294%, 33.895874%, 80.450439%)" offset="0.746094" />
            <stop stopOpacity="1" stopColor="rgb(37.211609%, 33.822632%, 80.366516%)" offset="0.75" />
            <stop stopOpacity="1" stopColor="rgb(36.846924%, 33.74939%, 80.282593%)" offset="0.753906" />
            <stop stopOpacity="1" stopColor="rgb(36.482239%, 33.676147%, 80.198669%)" offset="0.757812" />
            <stop stopOpacity="1" stopColor="rgb(36.117554%, 33.601379%, 80.11322%)" offset="0.761719" />
            <stop stopOpacity="1" stopColor="rgb(35.754395%, 33.528137%, 80.029297%)" offset="0.765625" />
            <stop stopOpacity="1" stopColor="rgb(35.389709%, 33.454895%, 79.943848%)" offset="0.769531" />
            <stop stopOpacity="1" stopColor="rgb(35.025024%, 33.381653%, 79.859924%)" offset="0.773437" />
            <stop stopOpacity="1" stopColor="rgb(34.660339%, 33.306885%, 79.774475%)" offset="0.777344" />
            <stop stopOpacity="1" stopColor="rgb(34.295654%, 33.233643%, 79.690552%)" offset="0.78125" />
            <stop stopOpacity="1" stopColor="rgb(33.930969%, 33.158875%, 79.605103%)" offset="0.785156" />
            <stop stopOpacity="1" stopColor="rgb(33.56781%, 33.085632%, 79.521179%)" offset="0.789062" />
            <stop stopOpacity="1" stopColor="rgb(33.203125%, 33.01239%, 79.437256%)" offset="0.792969" />
            <stop stopOpacity="1" stopColor="rgb(32.83844%, 32.939148%, 79.353333%)" offset="0.796875" />
            <stop stopOpacity="1" stopColor="rgb(32.473755%, 32.86438%, 79.267883%)" offset="0.800781" />
            <stop stopOpacity="1" stopColor="rgb(32.10907%, 32.791138%, 79.18396%)" offset="0.804687" />
            <stop stopOpacity="1" stopColor="rgb(31.744385%, 32.71637%, 79.098511%)" offset="0.808594" />
            <stop stopOpacity="1" stopColor="rgb(31.381226%, 32.643127%, 79.014587%)" offset="0.8125" />
            <stop stopOpacity="1" stopColor="rgb(31.016541%, 32.569885%, 78.929138%)" offset="0.816406" />
            <stop stopOpacity="1" stopColor="rgb(30.651855%, 32.496643%, 78.845215%)" offset="0.820312" />
            <stop stopOpacity="1" stopColor="rgb(30.28717%, 32.421875%, 78.759766%)" offset="0.824219" />
            <stop stopOpacity="1" stopColor="rgb(29.922485%, 32.348633%, 78.675842%)" offset="0.828125" />
            <stop stopOpacity="1" stopColor="rgb(29.5578%, 32.273865%, 78.591919%)" offset="0.832031" />
            <stop stopOpacity="1" stopColor="rgb(29.194641%, 32.200623%, 78.507996%)" offset="0.835937" />
            <stop stopOpacity="1" stopColor="rgb(28.829956%, 32.12738%, 78.422546%)" offset="0.839844" />
            <stop stopOpacity="1" stopColor="rgb(28.465271%, 32.054138%, 78.338623%)" offset="0.84375" />
            <stop stopOpacity="1" stopColor="rgb(28.100586%, 31.97937%, 78.253174%)" offset="0.847656" />
            <stop stopOpacity="1" stopColor="rgb(27.735901%, 31.906128%, 78.16925%)" offset="0.851562" />
            <stop stopOpacity="1" stopColor="rgb(27.371216%, 31.832886%, 78.083801%)" offset="0.855469" />
            <stop stopOpacity="1" stopColor="rgb(27.008057%, 31.759644%, 77.999878%)" offset="0.859375" />
            <stop stopOpacity="1" stopColor="rgb(26.643372%, 31.684875%, 77.914429%)" offset="0.863281" />
            <stop stopOpacity="1" stopColor="rgb(26.278687%, 31.611633%, 77.830505%)" offset="0.867187" />
            <stop stopOpacity="1" stopColor="rgb(25.914001%, 31.536865%, 77.746582%)" offset="0.871094" />
            <stop stopOpacity="1" stopColor="rgb(25.549316%, 31.463623%, 77.662659%)" offset="0.875" />
            <stop stopOpacity="1" stopColor="rgb(25.184631%, 31.390381%, 77.577209%)" offset="0.878906" />
            <stop stopOpacity="1" stopColor="rgb(24.821472%, 31.317139%, 77.493286%)" offset="0.882812" />
            <stop stopOpacity="1" stopColor="rgb(24.456787%, 31.242371%, 77.407837%)" offset="0.886719" />
            <stop stopOpacity="1" stopColor="rgb(24.092102%, 31.169128%, 77.323914%)" offset="0.890625" />
            <stop stopOpacity="1" stopColor="rgb(23.727417%, 31.09436%, 77.238464%)" offset="0.894531" />
            <stop stopOpacity="1" stopColor="rgb(23.362732%, 31.021118%, 77.154541%)" offset="0.898437" />
            <stop stopOpacity="1" stopColor="rgb(22.998047%, 30.947876%, 77.069092%)" offset="0.902344" />
            <stop stopOpacity="1" stopColor="rgb(22.634888%, 30.874634%, 76.985168%)" offset="0.90625" />
            <stop stopOpacity="1" stopColor="rgb(22.270203%, 30.799866%, 76.901245%)" offset="0.910156" />
            <stop stopOpacity="1" stopColor="rgb(21.905518%, 30.726624%, 76.817322%)" offset="0.914063" />
            <stop stopOpacity="1" stopColor="rgb(21.540833%, 30.651855%, 76.731873%)" offset="0.917969" />
            <stop stopOpacity="1" stopColor="rgb(21.177673%, 30.578613%, 76.647949%)" offset="0.921875" />
            <stop stopOpacity="1" stopColor="rgb(20.812988%, 30.505371%, 76.5625%)" offset="0.925781" />
            <stop stopOpacity="1" stopColor="rgb(20.448303%, 30.432129%, 76.478577%)" offset="0.929688" />
            <stop stopOpacity="1" stopColor="rgb(20.083618%, 30.357361%, 76.393127%)" offset="0.933594" />
            <stop stopOpacity="1" stopColor="rgb(19.718933%, 30.284119%, 76.309204%)" offset="0.9375" />
            <stop stopOpacity="1" stopColor="rgb(19.354248%, 30.210876%, 76.223755%)" offset="0.941406" />
            <stop stopOpacity="1" stopColor="rgb(18.991089%, 30.137634%, 76.139832%)" offset="0.945312" />
            <stop stopOpacity="1" stopColor="rgb(18.626404%, 30.062866%, 76.055908%)" offset="0.949219" />
            <stop stopOpacity="1" stopColor="rgb(18.261719%, 29.989624%, 75.971985%)" offset="0.953125" />
            <stop stopOpacity="1" stopColor="rgb(17.897034%, 29.914856%, 75.886536%)" offset="0.957031" />
            <stop stopOpacity="1" stopColor="rgb(17.532349%, 29.841614%, 75.802612%)" offset="0.960937" />
            <stop stopOpacity="1" stopColor="rgb(17.167664%, 29.768372%, 75.717163%)" offset="0.964844" />
            <stop stopOpacity="1" stopColor="rgb(16.804504%, 29.695129%, 75.63324%)" offset="0.96875" />
            <stop stopOpacity="1" stopColor="rgb(16.439819%, 29.620361%, 75.547791%)" offset="0.972656" />
            <stop stopOpacity="1" stopColor="rgb(16.075134%, 29.547119%, 75.463867%)" offset="0.976562" />
            <stop stopOpacity="1" stopColor="rgb(15.710449%, 29.472351%, 75.378418%)" offset="0.980469" />
            <stop stopOpacity="1" stopColor="rgb(15.345764%, 29.399109%, 75.294495%)" offset="0.984375" />
            <stop stopOpacity="1" stopColor="rgb(14.981079%, 29.325867%, 75.210571%)" offset="0.988281" />
            <stop stopOpacity="1" stopColor="rgb(14.61792%, 29.252625%, 75.126648%)" offset="0.992187" />
            <stop stopOpacity="1" stopColor="rgb(14.253235%, 29.177856%, 75.041199%)" offset="0.996094" />
            <stop stopOpacity="1" stopColor="rgb(13.88855%, 29.104614%, 74.957275%)" offset="1" />
          </linearGradient>
          <clipPath id="0e9c71b8ba">
            <path d="M 511 10.144531 L 891 10.144531 L 891 382 L 511 382 Z M 511 10.144531 " clipRule="nonzero" />
          </clipPath>
          <clipPath id="76a779532c">
            <path
              d="M 512.835938 198.429688 L 890.9375 381.992188 L 890.9375 194.207031 L 511.808594 10.144531 Z M 512.835938 198.429688 "
              clipRule="nonzero"
            />
          </clipPath>
          <linearGradient
            x1="228.696767"
            gradientTransform="matrix(1.515778, 0, 0, 1.514718, 133.709768, 10.144595)"
            y1="34.162335"
            x2="520.344341"
            gradientUnits="userSpaceOnUse"
            y2="211.268189"
            id="7c33f24999"
          >
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.25" />
            <stop stopOpacity="1" stopColor="rgb(79.566956%, 42.391968%, 90.19165%)" offset="0.257812" />
            <stop stopOpacity="1" stopColor="rgb(79.136658%, 42.304993%, 90.090942%)" offset="0.261719" />
            <stop stopOpacity="1" stopColor="rgb(78.738403%, 42.225647%, 89.99939%)" offset="0.265625" />
            <stop stopOpacity="1" stopColor="rgb(78.340149%, 42.144775%, 89.906311%)" offset="0.269531" />
            <stop stopOpacity="1" stopColor="rgb(77.941895%, 42.063904%, 89.814758%)" offset="0.273438" />
            <stop stopOpacity="1" stopColor="rgb(77.54364%, 41.983032%, 89.72168%)" offset="0.277344" />
            <stop stopOpacity="1" stopColor="rgb(77.146912%, 41.903687%, 89.630127%)" offset="0.28125" />
            <stop stopOpacity="1" stopColor="rgb(76.748657%, 41.822815%, 89.537048%)" offset="0.285156" />
            <stop stopOpacity="1" stopColor="rgb(76.350403%, 41.741943%, 89.445496%)" offset="0.289062" />
            <stop stopOpacity="1" stopColor="rgb(75.952148%, 41.661072%, 89.352417%)" offset="0.292969" />
            <stop stopOpacity="1" stopColor="rgb(75.553894%, 41.5802%, 89.260864%)" offset="0.296875" />
            <stop stopOpacity="1" stopColor="rgb(75.15564%, 41.499329%, 89.167786%)" offset="0.300781" />
            <stop stopOpacity="1" stopColor="rgb(74.758911%, 41.419983%, 89.076233%)" offset="0.304688" />
            <stop stopOpacity="1" stopColor="rgb(74.360657%, 41.339111%, 88.983154%)" offset="0.308594" />
            <stop stopOpacity="1" stopColor="rgb(73.962402%, 41.25824%, 88.891602%)" offset="0.3125" />
            <stop stopOpacity="1" stopColor="rgb(73.564148%, 41.177368%, 88.798523%)" offset="0.316406" />
            <stop stopOpacity="1" stopColor="rgb(73.167419%, 41.098022%, 88.70697%)" offset="0.320313" />
            <stop stopOpacity="1" stopColor="rgb(72.769165%, 41.017151%, 88.613892%)" offset="0.324219" />
            <stop stopOpacity="1" stopColor="rgb(72.370911%, 40.936279%, 88.522339%)" offset="0.328125" />
            <stop stopOpacity="1" stopColor="rgb(71.972656%, 40.855408%, 88.42926%)" offset="0.332031" />
            <stop stopOpacity="1" stopColor="rgb(71.574402%, 40.776062%, 88.337708%)" offset="0.335938" />
            <stop stopOpacity="1" stopColor="rgb(71.176147%, 40.69519%, 88.244629%)" offset="0.339844" />
            <stop stopOpacity="1" stopColor="rgb(70.779419%, 40.614319%, 88.153076%)" offset="0.34375" />
            <stop stopOpacity="1" stopColor="rgb(70.381165%, 40.533447%, 88.059998%)" offset="0.347656" />
            <stop stopOpacity="1" stopColor="rgb(69.98291%, 40.454102%, 87.968445%)" offset="0.351563" />
            <stop stopOpacity="1" stopColor="rgb(69.584656%, 40.37323%, 87.875366%)" offset="0.355469" />
            <stop stopOpacity="1" stopColor="rgb(69.186401%, 40.292358%, 87.783813%)" offset="0.359375" />
            <stop stopOpacity="1" stopColor="rgb(68.788147%, 40.211487%, 87.690735%)" offset="0.363281" />
            <stop stopOpacity="1" stopColor="rgb(68.391418%, 40.132141%, 87.599182%)" offset="0.367188" />
            <stop stopOpacity="1" stopColor="rgb(67.993164%, 40.05127%, 87.506104%)" offset="0.371094" />
            <stop stopOpacity="1" stopColor="rgb(67.59491%, 39.970398%, 87.414551%)" offset="0.375" />
            <stop stopOpacity="1" stopColor="rgb(67.196655%, 39.889526%, 87.321472%)" offset="0.378906" />
            <stop stopOpacity="1" stopColor="rgb(66.798401%, 39.810181%, 87.229919%)" offset="0.382813" />
            <stop stopOpacity="1" stopColor="rgb(66.400146%, 39.729309%, 87.136841%)" offset="0.386719" />
            <stop stopOpacity="1" stopColor="rgb(66.003418%, 39.648438%, 87.045288%)" offset="0.390625" />
            <stop stopOpacity="1" stopColor="rgb(65.605164%, 39.567566%, 86.952209%)" offset="0.394531" />
            <stop stopOpacity="1" stopColor="rgb(65.206909%, 39.486694%, 86.860657%)" offset="0.398438" />
            <stop stopOpacity="1" stopColor="rgb(64.808655%, 39.405823%, 86.767578%)" offset="0.402344" />
            <stop stopOpacity="1" stopColor="rgb(64.4104%, 39.326477%, 86.676025%)" offset="0.40625" />
            <stop stopOpacity="1" stopColor="rgb(64.012146%, 39.245605%, 86.582947%)" offset="0.410156" />
            <stop stopOpacity="1" stopColor="rgb(63.615417%, 39.164734%, 86.491394%)" offset="0.414063" />
            <stop stopOpacity="1" stopColor="rgb(63.217163%, 39.083862%, 86.398315%)" offset="0.417969" />
            <stop stopOpacity="1" stopColor="rgb(62.818909%, 39.004517%, 86.306763%)" offset="0.421875" />
            <stop stopOpacity="1" stopColor="rgb(62.420654%, 38.923645%, 86.213684%)" offset="0.425781" />
            <stop stopOpacity="1" stopColor="rgb(62.0224%, 38.842773%, 86.122131%)" offset="0.429688" />
            <stop stopOpacity="1" stopColor="rgb(61.624146%, 38.761902%, 86.029053%)" offset="0.433594" />
            <stop stopOpacity="1" stopColor="rgb(61.227417%, 38.682556%, 85.9375%)" offset="0.4375" />
            <stop stopOpacity="1" stopColor="rgb(60.829163%, 38.601685%, 85.844421%)" offset="0.441406" />
            <stop stopOpacity="1" stopColor="rgb(60.430908%, 38.520813%, 85.752869%)" offset="0.445312" />
            <stop stopOpacity="1" stopColor="rgb(60.032654%, 38.439941%, 85.65979%)" offset="0.449219" />
            <stop stopOpacity="1" stopColor="rgb(59.634399%, 38.360596%, 85.568237%)" offset="0.453125" />
            <stop stopOpacity="1" stopColor="rgb(59.236145%, 38.279724%, 85.475159%)" offset="0.457031" />
            <stop stopOpacity="1" stopColor="rgb(58.839417%, 38.198853%, 85.383606%)" offset="0.460938" />
            <stop stopOpacity="1" stopColor="rgb(58.441162%, 38.117981%, 85.290527%)" offset="0.464844" />
            <stop stopOpacity="1" stopColor="rgb(58.042908%, 38.038635%, 85.198975%)" offset="0.46875" />
            <stop stopOpacity="1" stopColor="rgb(57.644653%, 37.957764%, 85.105896%)" offset="0.472656" />
            <stop stopOpacity="1" stopColor="rgb(57.246399%, 37.876892%, 85.014343%)" offset="0.476562" />
            <stop stopOpacity="1" stopColor="rgb(56.848145%, 37.796021%, 84.921265%)" offset="0.480469" />
            <stop stopOpacity="1" stopColor="rgb(56.451416%, 37.715149%, 84.829712%)" offset="0.484375" />
            <stop stopOpacity="1" stopColor="rgb(56.053162%, 37.634277%, 84.736633%)" offset="0.488281" />
            <stop stopOpacity="1" stopColor="rgb(55.654907%, 37.554932%, 84.645081%)" offset="0.492188" />
            <stop stopOpacity="1" stopColor="rgb(55.256653%, 37.47406%, 84.552002%)" offset="0.496094" />
            <stop stopOpacity="1" stopColor="rgb(54.858398%, 37.393188%, 84.460449%)" offset="0.5" />
            <stop stopOpacity="1" stopColor="rgb(54.460144%, 37.312317%, 84.367371%)" offset="0.503906" />
            <stop stopOpacity="1" stopColor="rgb(54.063416%, 37.232971%, 84.275818%)" offset="0.507812" />
            <stop stopOpacity="1" stopColor="rgb(53.665161%, 37.1521%, 84.182739%)" offset="0.511719" />
            <stop stopOpacity="1" stopColor="rgb(53.266907%, 37.071228%, 84.091187%)" offset="0.515625" />
            <stop stopOpacity="1" stopColor="rgb(52.868652%, 36.990356%, 83.998108%)" offset="0.519531" />
            <stop stopOpacity="1" stopColor="rgb(52.470398%, 36.911011%, 83.906555%)" offset="0.523438" />
            <stop stopOpacity="1" stopColor="rgb(52.072144%, 36.830139%, 83.813477%)" offset="0.527344" />
            <stop stopOpacity="1" stopColor="rgb(51.675415%, 36.749268%, 83.721924%)" offset="0.53125" />
            <stop stopOpacity="1" stopColor="rgb(51.277161%, 36.668396%, 83.628845%)" offset="0.535156" />
            <stop stopOpacity="1" stopColor="rgb(50.878906%, 36.58905%, 83.537292%)" offset="0.539062" />
            <stop stopOpacity="1" stopColor="rgb(50.480652%, 36.508179%, 83.444214%)" offset="0.542969" />
            <stop stopOpacity="1" stopColor="rgb(50.082397%, 36.427307%, 83.352661%)" offset="0.546875" />
            <stop stopOpacity="1" stopColor="rgb(49.684143%, 36.346436%, 83.259583%)" offset="0.550781" />
            <stop stopOpacity="1" stopColor="rgb(49.287415%, 36.26709%, 83.16803%)" offset="0.554688" />
            <stop stopOpacity="1" stopColor="rgb(48.88916%, 36.186218%, 83.074951%)" offset="0.558594" />
            <stop stopOpacity="1" stopColor="rgb(48.490906%, 36.105347%, 82.983398%)" offset="0.5625" />
            <stop stopOpacity="1" stopColor="rgb(48.092651%, 36.024475%, 82.89032%)" offset="0.566406" />
            <stop stopOpacity="1" stopColor="rgb(47.694397%, 35.945129%, 82.798767%)" offset="0.570313" />
            <stop stopOpacity="1" stopColor="rgb(47.296143%, 35.864258%, 82.705688%)" offset="0.574219" />
            <stop stopOpacity="1" stopColor="rgb(46.899414%, 35.783386%, 82.614136%)" offset="0.578125" />
            <stop stopOpacity="1" stopColor="rgb(46.50116%, 35.702515%, 82.521057%)" offset="0.582031" />
            <stop stopOpacity="1" stopColor="rgb(46.102905%, 35.621643%, 82.429504%)" offset="0.585938" />
            <stop stopOpacity="1" stopColor="rgb(45.704651%, 35.540771%, 82.336426%)" offset="0.589844" />
            <stop stopOpacity="1" stopColor="rgb(45.307922%, 35.461426%, 82.244873%)" offset="0.59375" />
            <stop stopOpacity="1" stopColor="rgb(44.909668%, 35.380554%, 82.151794%)" offset="0.597656" />
            <stop stopOpacity="1" stopColor="rgb(44.511414%, 35.299683%, 82.060242%)" offset="0.601563" />
            <stop stopOpacity="1" stopColor="rgb(44.113159%, 35.218811%, 81.967163%)" offset="0.605469" />
            <stop stopOpacity="1" stopColor="rgb(43.714905%, 35.139465%, 81.87561%)" offset="0.609375" />
            <stop stopOpacity="1" stopColor="rgb(43.31665%, 35.058594%, 81.782532%)" offset="0.613281" />
            <stop stopOpacity="1" stopColor="rgb(42.919922%, 34.977722%, 81.690979%)" offset="0.617188" />
            <stop stopOpacity="1" stopColor="rgb(42.521667%, 34.896851%, 81.5979%)" offset="0.621094" />
            <stop stopOpacity="1" stopColor="rgb(42.123413%, 34.817505%, 81.506348%)" offset="0.625" />
            <stop stopOpacity="1" stopColor="rgb(41.725159%, 34.736633%, 81.413269%)" offset="0.628906" />
            <stop stopOpacity="1" stopColor="rgb(41.326904%, 34.655762%, 81.321716%)" offset="0.632812" />
            <stop stopOpacity="1" stopColor="rgb(40.92865%, 34.57489%, 81.228638%)" offset="0.636719" />
            <stop stopOpacity="1" stopColor="rgb(40.531921%, 34.495544%, 81.137085%)" offset="0.640625" />
            <stop stopOpacity="1" stopColor="rgb(40.133667%, 34.414673%, 81.044006%)" offset="0.644531" />
            <stop stopOpacity="1" stopColor="rgb(39.735413%, 34.333801%, 80.952454%)" offset="0.648438" />
            <stop stopOpacity="1" stopColor="rgb(39.337158%, 34.25293%, 80.859375%)" offset="0.652344" />
            <stop stopOpacity="1" stopColor="rgb(38.938904%, 34.173584%, 80.767822%)" offset="0.65625" />
            <stop stopOpacity="1" stopColor="rgb(38.540649%, 34.092712%, 80.674744%)" offset="0.660156" />
            <stop stopOpacity="1" stopColor="rgb(38.143921%, 34.011841%, 80.583191%)" offset="0.664062" />
            <stop stopOpacity="1" stopColor="rgb(37.745667%, 33.930969%, 80.490112%)" offset="0.667969" />
            <stop stopOpacity="1" stopColor="rgb(37.347412%, 33.850098%, 80.39856%)" offset="0.671875" />
            <stop stopOpacity="1" stopColor="rgb(36.949158%, 33.769226%, 80.305481%)" offset="0.675781" />
            <stop stopOpacity="1" stopColor="rgb(36.550903%, 33.68988%, 80.213928%)" offset="0.679688" />
            <stop stopOpacity="1" stopColor="rgb(36.152649%, 33.609009%, 80.12085%)" offset="0.683594" />
            <stop stopOpacity="1" stopColor="rgb(35.75592%, 33.528137%, 80.029297%)" offset="0.6875" />
            <stop stopOpacity="1" stopColor="rgb(35.357666%, 33.447266%, 79.936218%)" offset="0.691406" />
            <stop stopOpacity="1" stopColor="rgb(34.959412%, 33.36792%, 79.844666%)" offset="0.695313" />
            <stop stopOpacity="1" stopColor="rgb(34.561157%, 33.287048%, 79.751587%)" offset="0.699219" />
            <stop stopOpacity="1" stopColor="rgb(34.162903%, 33.206177%, 79.660034%)" offset="0.703125" />
            <stop stopOpacity="1" stopColor="rgb(33.764648%, 33.125305%, 79.566956%)" offset="0.707031" />
            <stop stopOpacity="1" stopColor="rgb(33.36792%, 33.045959%, 79.475403%)" offset="0.710938" />
            <stop stopOpacity="1" stopColor="rgb(32.969666%, 32.965088%, 79.382324%)" offset="0.714844" />
            <stop stopOpacity="1" stopColor="rgb(32.571411%, 32.884216%, 79.290771%)" offset="0.71875" />
            <stop stopOpacity="1" stopColor="rgb(32.173157%, 32.803345%, 79.197693%)" offset="0.722656" />
            <stop stopOpacity="1" stopColor="rgb(31.774902%, 32.723999%, 79.10614%)" offset="0.726563" />
            <stop stopOpacity="1" stopColor="rgb(31.376648%, 32.643127%, 79.013062%)" offset="0.730469" />
            <stop stopOpacity="1" stopColor="rgb(30.979919%, 32.562256%, 78.921509%)" offset="0.734375" />
            <stop stopOpacity="1" stopColor="rgb(30.581665%, 32.481384%, 78.82843%)" offset="0.738281" />
            <stop stopOpacity="1" stopColor="rgb(30.183411%, 32.402039%, 78.736877%)" offset="0.742188" />
            <stop stopOpacity="1" stopColor="rgb(29.785156%, 32.321167%, 78.643799%)" offset="0.746094" />
            <stop stopOpacity="1" stopColor="rgb(29.386902%, 32.240295%, 78.552246%)" offset="0.75" />
            <stop stopOpacity="1" stopColor="rgb(28.988647%, 32.159424%, 78.459167%)" offset="0.753906" />
            <stop stopOpacity="1" stopColor="rgb(28.591919%, 32.080078%, 78.367615%)" offset="0.757813" />
            <stop stopOpacity="1" stopColor="rgb(28.193665%, 31.999207%, 78.274536%)" offset="0.761719" />
            <stop stopOpacity="1" stopColor="rgb(27.79541%, 31.918335%, 78.182983%)" offset="0.765625" />
            <stop stopOpacity="1" stopColor="rgb(27.397156%, 31.837463%, 78.089905%)" offset="0.769531" />
            <stop stopOpacity="1" stopColor="rgb(26.998901%, 31.756592%, 77.998352%)" offset="0.773438" />
            <stop stopOpacity="1" stopColor="rgb(26.600647%, 31.67572%, 77.905273%)" offset="0.777344" />
            <stop stopOpacity="1" stopColor="rgb(26.203918%, 31.596375%, 77.813721%)" offset="0.78125" />
            <stop stopOpacity="1" stopColor="rgb(25.805664%, 31.515503%, 77.720642%)" offset="0.785156" />
            <stop stopOpacity="1" stopColor="rgb(25.40741%, 31.434631%, 77.629089%)" offset="0.789063" />
            <stop stopOpacity="1" stopColor="rgb(25.009155%, 31.35376%, 77.536011%)" offset="0.792969" />
            <stop stopOpacity="1" stopColor="rgb(24.610901%, 31.274414%, 77.444458%)" offset="0.796875" />
            <stop stopOpacity="1" stopColor="rgb(24.212646%, 31.193542%, 77.351379%)" offset="0.800781" />
            <stop stopOpacity="1" stopColor="rgb(23.815918%, 31.112671%, 77.259827%)" offset="0.804688" />
            <stop stopOpacity="1" stopColor="rgb(23.417664%, 31.031799%, 77.166748%)" offset="0.808594" />
            <stop stopOpacity="1" stopColor="rgb(23.019409%, 30.952454%, 77.075195%)" offset="0.8125" />
            <stop stopOpacity="1" stopColor="rgb(22.621155%, 30.871582%, 76.982117%)" offset="0.816406" />
            <stop stopOpacity="1" stopColor="rgb(22.2229%, 30.79071%, 76.890564%)" offset="0.820312" />
            <stop stopOpacity="1" stopColor="rgb(21.824646%, 30.709839%, 76.797485%)" offset="0.824219" />
            <stop stopOpacity="1" stopColor="rgb(21.427917%, 30.630493%, 76.705933%)" offset="0.828125" />
            <stop stopOpacity="1" stopColor="rgb(21.029663%, 30.549622%, 76.612854%)" offset="0.832031" />
            <stop stopOpacity="1" stopColor="rgb(20.631409%, 30.46875%, 76.521301%)" offset="0.835938" />
            <stop stopOpacity="1" stopColor="rgb(20.233154%, 30.387878%, 76.428223%)" offset="0.839844" />
            <stop stopOpacity="1" stopColor="rgb(19.836426%, 30.308533%, 76.33667%)" offset="0.84375" />
            <stop stopOpacity="1" stopColor="rgb(19.438171%, 30.227661%, 76.243591%)" offset="0.847656" />
            <stop stopOpacity="1" stopColor="rgb(19.039917%, 30.14679%, 76.152039%)" offset="0.851563" />
            <stop stopOpacity="1" stopColor="rgb(18.641663%, 30.065918%, 76.05896%)" offset="0.855469" />
            <stop stopOpacity="1" stopColor="rgb(18.243408%, 29.986572%, 75.967407%)" offset="0.859375" />
            <stop stopOpacity="1" stopColor="rgb(17.845154%, 29.905701%, 75.874329%)" offset="0.863281" />
            <stop stopOpacity="1" stopColor="rgb(17.448425%, 29.824829%, 75.782776%)" offset="0.867188" />
            <stop stopOpacity="1" stopColor="rgb(17.050171%, 29.743958%, 75.689697%)" offset="0.871094" />
            <stop stopOpacity="1" stopColor="rgb(16.651917%, 29.663086%, 75.598145%)" offset="0.875" />
            <stop stopOpacity="1" stopColor="rgb(16.253662%, 29.582214%, 75.505066%)" offset="0.878906" />
            <stop stopOpacity="1" stopColor="rgb(15.855408%, 29.502869%, 75.413513%)" offset="0.882813" />
            <stop stopOpacity="1" stopColor="rgb(15.457153%, 29.421997%, 75.320435%)" offset="0.886719" />
            <stop stopOpacity="1" stopColor="rgb(15.060425%, 29.341125%, 75.228882%)" offset="0.890625" />
            <stop stopOpacity="1" stopColor="rgb(14.66217%, 29.260254%, 75.135803%)" offset="0.894531" />
            <stop stopOpacity="1" stopColor="rgb(14.263916%, 29.180908%, 75.04425%)" offset="0.898438" />
            <stop stopOpacity="1" stopColor="rgb(13.865662%, 29.100037%, 74.951172%)" offset="0.902344" />
            <stop stopOpacity="1" stopColor="rgb(13.467407%, 29.019165%, 74.859619%)" offset="0.90625" />
            <stop stopOpacity="1" stopColor="rgb(13.069153%, 28.938293%, 74.766541%)" offset="0.910156" />
            <stop stopOpacity="1" stopColor="rgb(12.672424%, 28.858948%, 74.674988%)" offset="0.914063" />
            <stop stopOpacity="1" stopColor="rgb(12.27417%, 28.778076%, 74.581909%)" offset="0.917969" />
            <stop stopOpacity="1" stopColor="rgb(11.875916%, 28.697205%, 74.490356%)" offset="0.921875" />
            <stop stopOpacity="1" stopColor="rgb(11.477661%, 28.616333%, 74.397278%)" offset="0.925781" />
            <stop stopOpacity="1" stopColor="rgb(11.079407%, 28.536987%, 74.305725%)" offset="0.929688" />
            <stop stopOpacity="1" stopColor="rgb(10.681152%, 28.456116%, 74.212646%)" offset="0.933594" />
            <stop stopOpacity="1" stopColor="rgb(10.284424%, 28.375244%, 74.121094%)" offset="0.9375" />
            <stop stopOpacity="1" stopColor="rgb(9.886169%, 28.294373%, 74.028015%)" offset="0.941406" />
            <stop stopOpacity="1" stopColor="rgb(9.487915%, 28.215027%, 73.936462%)" offset="0.945312" />
            <stop stopOpacity="1" stopColor="rgb(9.089661%, 28.134155%, 73.843384%)" offset="0.949219" />
            <stop stopOpacity="1" stopColor="rgb(8.691406%, 28.053284%, 73.751831%)" offset="0.953125" />
            <stop stopOpacity="1" stopColor="rgb(8.293152%, 27.972412%, 73.658752%)" offset="0.957031" />
            <stop stopOpacity="1" stopColor="rgb(7.896423%, 27.891541%, 73.5672%)" offset="0.960938" />
            <stop stopOpacity="1" stopColor="rgb(7.498169%, 27.810669%, 73.474121%)" offset="0.964844" />
            <stop stopOpacity="1" stopColor="rgb(7.099915%, 27.731323%, 73.382568%)" offset="0.96875" />
            <stop stopOpacity="1" stopColor="rgb(6.70166%, 27.650452%, 73.28949%)" offset="0.972656" />
            <stop stopOpacity="1" stopColor="rgb(6.303406%, 27.56958%, 73.197937%)" offset="0.976563" />
            <stop stopOpacity="1" stopColor="rgb(5.905151%, 27.488708%, 73.104858%)" offset="0.980469" />
            <stop stopOpacity="1" stopColor="rgb(5.508423%, 27.409363%, 73.013306%)" offset="0.984375" />
            <stop stopOpacity="1" stopColor="rgb(5.110168%, 27.328491%, 72.920227%)" offset="0.988281" />
            <stop stopOpacity="1" stopColor="rgb(4.711914%, 27.24762%, 72.828674%)" offset="0.992188" />
            <stop stopOpacity="1" stopColor="rgb(4.31366%, 27.166748%, 72.735596%)" offset="0.996094" />
            <stop stopOpacity="1" stopColor="rgb(3.915405%, 27.087402%, 72.644043%)" offset="1" />
          </linearGradient>
          <clipPath id="6b8112fd36">
            <path d="M 318 193 L 891 193 L 891 565.894531 L 318 565.894531 Z M 318 193 " clipRule="nonzero" />
          </clipPath>
          <clipPath id="0437d5795f">
            <path
              d="M 890.9375 381.777344 L 511.808594 565.839844 L 318.925781 471.699219 L 890.9375 193.992188 Z M 890.9375 381.777344 "
              clipRule="nonzero"
            />
          </clipPath>
          <linearGradient
            x1="129.722737"
            gradientTransform="matrix(1.515778, 0, 0, 1.514718, 133.709768, 10.144595)"
            y1="108.342919"
            x2="518.957826"
            gradientUnits="userSpaceOnUse"
            y2="333.306863"
            id="55093fc66a"
          >
            <stop stopOpacity="1" stopColor="rgb(72.624207%, 40.988159%, 88.581848%)" offset="0" />
            <stop stopOpacity="1" stopColor="rgb(72.259521%, 40.913391%, 88.496399%)" offset="0.00390625" />
            <stop stopOpacity="1" stopColor="rgb(71.894836%, 40.840149%, 88.412476%)" offset="0.0078125" />
            <stop stopOpacity="1" stopColor="rgb(71.530151%, 40.766907%, 88.327026%)" offset="0.0117188" />
            <stop stopOpacity="1" stopColor="rgb(71.165466%, 40.693665%, 88.243103%)" offset="0.015625" />
            <stop stopOpacity="1" stopColor="rgb(70.800781%, 40.618896%, 88.157654%)" offset="0.0195312" />
            <stop stopOpacity="1" stopColor="rgb(70.437622%, 40.545654%, 88.07373%)" offset="0.0234375" />
            <stop stopOpacity="1" stopColor="rgb(70.072937%, 40.470886%, 87.988281%)" offset="0.0273437" />
            <stop stopOpacity="1" stopColor="rgb(69.708252%, 40.397644%, 87.904358%)" offset="0.03125" />
            <stop stopOpacity="1" stopColor="rgb(69.343567%, 40.324402%, 87.820435%)" offset="0.0351562" />
            <stop stopOpacity="1" stopColor="rgb(68.978882%, 40.25116%, 87.736511%)" offset="0.0390625" />
            <stop stopOpacity="1" stopColor="rgb(68.614197%, 40.176392%, 87.651062%)" offset="0.0429687" />
            <stop stopOpacity="1" stopColor="rgb(68.251038%, 40.103149%, 87.567139%)" offset="0.046875" />
            <stop stopOpacity="1" stopColor="rgb(67.886353%, 40.028381%, 87.481689%)" offset="0.0507812" />
            <stop stopOpacity="1" stopColor="rgb(67.521667%, 39.955139%, 87.397766%)" offset="0.0546875" />
            <stop stopOpacity="1" stopColor="rgb(67.156982%, 39.881897%, 87.312317%)" offset="0.0585937" />
            <stop stopOpacity="1" stopColor="rgb(66.792297%, 39.808655%, 87.228394%)" offset="0.0625" />
            <stop stopOpacity="1" stopColor="rgb(66.427612%, 39.733887%, 87.142944%)" offset="0.0664062" />
            <stop stopOpacity="1" stopColor="rgb(66.064453%, 39.660645%, 87.059021%)" offset="0.0703125" />
            <stop stopOpacity="1" stopColor="rgb(65.699768%, 39.585876%, 86.975098%)" offset="0.0742188" />
            <stop stopOpacity="1" stopColor="rgb(65.335083%, 39.512634%, 86.891174%)" offset="0.078125" />
            <stop stopOpacity="1" stopColor="rgb(64.970398%, 39.439392%, 86.805725%)" offset="0.0820312" />
            <stop stopOpacity="1" stopColor="rgb(64.605713%, 39.36615%, 86.721802%)" offset="0.0859375" />
            <stop stopOpacity="1" stopColor="rgb(64.241028%, 39.291382%, 86.636353%)" offset="0.0898438" />
            <stop stopOpacity="1" stopColor="rgb(63.877869%, 39.21814%, 86.552429%)" offset="0.09375" />
            <stop stopOpacity="1" stopColor="rgb(63.513184%, 39.144897%, 86.46698%)" offset="0.0976563" />
            <stop stopOpacity="1" stopColor="rgb(63.148499%, 39.071655%, 86.383057%)" offset="0.101563" />
            <stop stopOpacity="1" stopColor="rgb(62.783813%, 38.996887%, 86.297607%)" offset="0.105469" />
            <stop stopOpacity="1" stopColor="rgb(62.419128%, 38.923645%, 86.213684%)" offset="0.109375" />
            <stop stopOpacity="1" stopColor="rgb(62.054443%, 38.848877%, 86.129761%)" offset="0.113281" />
            <stop stopOpacity="1" stopColor="rgb(61.691284%, 38.775635%, 86.045837%)" offset="0.117188" />
            <stop stopOpacity="1" stopColor="rgb(61.326599%, 38.702393%, 85.960388%)" offset="0.121094" />
            <stop stopOpacity="1" stopColor="rgb(60.961914%, 38.62915%, 85.876465%)" offset="0.125" />
            <stop stopOpacity="1" stopColor="rgb(60.597229%, 38.554382%, 85.791016%)" offset="0.128906" />
            <stop stopOpacity="1" stopColor="rgb(60.232544%, 38.48114%, 85.707092%)" offset="0.132812" />
            <stop stopOpacity="1" stopColor="rgb(59.867859%, 38.406372%, 85.621643%)" offset="0.136719" />
            <stop stopOpacity="1" stopColor="rgb(59.5047%, 38.33313%, 85.53772%)" offset="0.140625" />
            <stop stopOpacity="1" stopColor="rgb(59.140015%, 38.259888%, 85.452271%)" offset="0.144531" />
            <stop stopOpacity="1" stopColor="rgb(58.77533%, 38.186646%, 85.368347%)" offset="0.148438" />
            <stop stopOpacity="1" stopColor="rgb(58.410645%, 38.111877%, 85.284424%)" offset="0.152344" />
            <stop stopOpacity="1" stopColor="rgb(58.047485%, 38.038635%, 85.2005%)" offset="0.15625" />
            <stop stopOpacity="1" stopColor="rgb(57.6828%, 37.963867%, 85.115051%)" offset="0.160156" />
            <stop stopOpacity="1" stopColor="rgb(57.318115%, 37.890625%, 85.031128%)" offset="0.164062" />
            <stop stopOpacity="1" stopColor="rgb(56.95343%, 37.817383%, 84.945679%)" offset="0.167969" />
            <stop stopOpacity="1" stopColor="rgb(56.588745%, 37.744141%, 84.861755%)" offset="0.171875" />
            <stop stopOpacity="1" stopColor="rgb(56.22406%, 37.669373%, 84.776306%)" offset="0.175781" />
            <stop stopOpacity="1" stopColor="rgb(55.860901%, 37.59613%, 84.692383%)" offset="0.179688" />
            <stop stopOpacity="1" stopColor="rgb(55.496216%, 37.522888%, 84.606934%)" offset="0.183594" />
            <stop stopOpacity="1" stopColor="rgb(55.131531%, 37.449646%, 84.52301%)" offset="0.1875" />
            <stop stopOpacity="1" stopColor="rgb(54.766846%, 37.374878%, 84.439087%)" offset="0.191406" />
            <stop stopOpacity="1" stopColor="rgb(54.402161%, 37.301636%, 84.355164%)" offset="0.195313" />
            <stop stopOpacity="1" stopColor="rgb(54.037476%, 37.226868%, 84.269714%)" offset="0.199219" />
            <stop stopOpacity="1" stopColor="rgb(53.674316%, 37.153625%, 84.185791%)" offset="0.203125" />
            <stop stopOpacity="1" stopColor="rgb(53.309631%, 37.080383%, 84.100342%)" offset="0.207031" />
            <stop stopOpacity="1" stopColor="rgb(52.944946%, 37.007141%, 84.016418%)" offset="0.210938" />
            <stop stopOpacity="1" stopColor="rgb(52.580261%, 36.932373%, 83.930969%)" offset="0.214844" />
            <stop stopOpacity="1" stopColor="rgb(52.215576%, 36.859131%, 83.847046%)" offset="0.21875" />
            <stop stopOpacity="1" stopColor="rgb(51.850891%, 36.784363%, 83.761597%)" offset="0.222656" />
            <stop stopOpacity="1" stopColor="rgb(51.487732%, 36.711121%, 83.677673%)" offset="0.226563" />
            <stop stopOpacity="1" stopColor="rgb(51.123047%, 36.637878%, 83.59375%)" offset="0.230469" />
            <stop stopOpacity="1" stopColor="rgb(50.758362%, 36.564636%, 83.509827%)" offset="0.234375" />
            <stop stopOpacity="1" stopColor="rgb(50.393677%, 36.489868%, 83.424377%)" offset="0.238281" />
            <stop stopOpacity="1" stopColor="rgb(50.028992%, 36.416626%, 83.340454%)" offset="0.242188" />
            <stop stopOpacity="1" stopColor="rgb(49.664307%, 36.341858%, 83.255005%)" offset="0.246094" />
            <stop stopOpacity="1" stopColor="rgb(49.301147%, 36.268616%, 83.171082%)" offset="0.25" />
            <stop stopOpacity="1" stopColor="rgb(48.936462%, 36.195374%, 83.085632%)" offset="0.253906" />
            <stop stopOpacity="1" stopColor="rgb(48.571777%, 36.122131%, 83.001709%)" offset="0.257812" />
            <stop stopOpacity="1" stopColor="rgb(48.207092%, 36.047363%, 82.91626%)" offset="0.261719" />
            <stop stopOpacity="1" stopColor="rgb(47.842407%, 35.974121%, 82.832336%)" offset="0.265625" />
            <stop stopOpacity="1" stopColor="rgb(47.477722%, 35.899353%, 82.748413%)" offset="0.269531" />
            <stop stopOpacity="1" stopColor="rgb(47.114563%, 35.826111%, 82.66449%)" offset="0.273437" />
            <stop stopOpacity="1" stopColor="rgb(46.749878%, 35.752869%, 82.579041%)" offset="0.277344" />
            <stop stopOpacity="1" stopColor="rgb(46.385193%, 35.679626%, 82.495117%)" offset="0.28125" />
            <stop stopOpacity="1" stopColor="rgb(46.020508%, 35.604858%, 82.409668%)" offset="0.285156" />
            <stop stopOpacity="1" stopColor="rgb(45.655823%, 35.531616%, 82.325745%)" offset="0.289062" />
            <stop stopOpacity="1" stopColor="rgb(45.291138%, 35.458374%, 82.240295%)" offset="0.292969" />
            <stop stopOpacity="1" stopColor="rgb(44.927979%, 35.385132%, 82.156372%)" offset="0.296875" />
            <stop stopOpacity="1" stopColor="rgb(44.563293%, 35.310364%, 82.072449%)" offset="0.300781" />
            <stop stopOpacity="1" stopColor="rgb(44.198608%, 35.237122%, 81.988525%)" offset="0.304688" />
            <stop stopOpacity="1" stopColor="rgb(43.833923%, 35.162354%, 81.903076%)" offset="0.308594" />
            <stop stopOpacity="1" stopColor="rgb(43.469238%, 35.089111%, 81.819153%)" offset="0.3125" />
            <stop stopOpacity="1" stopColor="rgb(43.104553%, 35.015869%, 81.733704%)" offset="0.316406" />
            <stop stopOpacity="1" stopColor="rgb(42.741394%, 34.942627%, 81.64978%)" offset="0.320312" />
            <stop stopOpacity="1" stopColor="rgb(42.376709%, 34.867859%, 81.564331%)" offset="0.324219" />
            <stop stopOpacity="1" stopColor="rgb(42.012024%, 34.794617%, 81.480408%)" offset="0.328125" />
            <stop stopOpacity="1" stopColor="rgb(41.647339%, 34.719849%, 81.394958%)" offset="0.332031" />
            <stop stopOpacity="1" stopColor="rgb(41.282654%, 34.646606%, 81.311035%)" offset="0.335938" />
            <stop stopOpacity="1" stopColor="rgb(40.917969%, 34.573364%, 81.227112%)" offset="0.339844" />
            <stop stopOpacity="1" stopColor="rgb(40.55481%, 34.500122%, 81.143188%)" offset="0.34375" />
            <stop stopOpacity="1" stopColor="rgb(40.190125%, 34.425354%, 81.057739%)" offset="0.347656" />
            <stop stopOpacity="1" stopColor="rgb(39.825439%, 34.352112%, 80.973816%)" offset="0.351562" />
            <stop stopOpacity="1" stopColor="rgb(39.460754%, 34.277344%, 80.888367%)" offset="0.355469" />
            <stop stopOpacity="1" stopColor="rgb(39.096069%, 34.204102%, 80.804443%)" offset="0.359375" />
            <stop stopOpacity="1" stopColor="rgb(38.731384%, 34.130859%, 80.718994%)" offset="0.363281" />
            <stop stopOpacity="1" stopColor="rgb(38.368225%, 34.057617%, 80.635071%)" offset="0.367188" />
            <stop stopOpacity="1" stopColor="rgb(38.00354%, 33.982849%, 80.549622%)" offset="0.371094" />
            <stop stopOpacity="1" stopColor="rgb(37.638855%, 33.909607%, 80.465698%)" offset="0.375" />
            <stop stopOpacity="1" stopColor="rgb(37.27417%, 33.836365%, 80.381775%)" offset="0.378906" />
            <stop stopOpacity="1" stopColor="rgb(36.909485%, 33.763123%, 80.297852%)" offset="0.382812" />
            <stop stopOpacity="1" stopColor="rgb(36.5448%, 33.688354%, 80.212402%)" offset="0.386719" />
            <stop stopOpacity="1" stopColor="rgb(36.181641%, 33.615112%, 80.128479%)" offset="0.390625" />
            <stop stopOpacity="1" stopColor="rgb(35.816956%, 33.540344%, 80.04303%)" offset="0.394531" />
            <stop stopOpacity="1" stopColor="rgb(35.452271%, 33.467102%, 79.959106%)" offset="0.398438" />
            <stop stopOpacity="1" stopColor="rgb(35.087585%, 33.39386%, 79.873657%)" offset="0.402344" />
            <stop stopOpacity="1" stopColor="rgb(34.724426%, 33.320618%, 79.789734%)" offset="0.40625" />
            <stop stopOpacity="1" stopColor="rgb(34.359741%, 33.24585%, 79.704285%)" offset="0.410156" />
            <stop stopOpacity="1" stopColor="rgb(33.995056%, 33.172607%, 79.620361%)" offset="0.414063" />
            <stop stopOpacity="1" stopColor="rgb(33.630371%, 33.097839%, 79.536438%)" offset="0.417969" />
            <stop stopOpacity="1" stopColor="rgb(33.265686%, 33.024597%, 79.452515%)" offset="0.421875" />
            <stop stopOpacity="1" stopColor="rgb(32.901001%, 32.951355%, 79.367065%)" offset="0.425781" />
            <stop stopOpacity="1" stopColor="rgb(32.537842%, 32.878113%, 79.283142%)" offset="0.429688" />
            <stop stopOpacity="1" stopColor="rgb(32.173157%, 32.803345%, 79.197693%)" offset="0.433594" />
            <stop stopOpacity="1" stopColor="rgb(31.808472%, 32.730103%, 79.11377%)" offset="0.4375" />
            <stop stopOpacity="1" stopColor="rgb(31.443787%, 32.655334%, 79.02832%)" offset="0.441406" />
            <stop stopOpacity="1" stopColor="rgb(31.079102%, 32.582092%, 78.944397%)" offset="0.445313" />
            <stop stopOpacity="1" stopColor="rgb(30.714417%, 32.50885%, 78.858948%)" offset="0.449219" />
            <stop stopOpacity="1" stopColor="rgb(30.351257%, 32.435608%, 78.775024%)" offset="0.453125" />
            <stop stopOpacity="1" stopColor="rgb(29.986572%, 32.36084%, 78.691101%)" offset="0.457031" />
            <stop stopOpacity="1" stopColor="rgb(29.621887%, 32.287598%, 78.607178%)" offset="0.460938" />
            <stop stopOpacity="1" stopColor="rgb(29.257202%, 32.214355%, 78.521729%)" offset="0.464844" />
            <stop stopOpacity="1" stopColor="rgb(28.892517%, 32.141113%, 78.437805%)" offset="0.46875" />
            <stop stopOpacity="1" stopColor="rgb(28.527832%, 32.066345%, 78.352356%)" offset="0.472656" />
            <stop stopOpacity="1" stopColor="rgb(28.164673%, 31.993103%, 78.268433%)" offset="0.476563" />
            <stop stopOpacity="1" stopColor="rgb(27.799988%, 31.918335%, 78.182983%)" offset="0.480469" />
            <stop stopOpacity="1" stopColor="rgb(27.435303%, 31.845093%, 78.09906%)" offset="0.484375" />
            <stop stopOpacity="1" stopColor="rgb(27.070618%, 31.771851%, 78.013611%)" offset="0.488281" />
            <stop stopOpacity="1" stopColor="rgb(26.705933%, 31.698608%, 77.929688%)" offset="0.492188" />
            <stop stopOpacity="1" stopColor="rgb(26.341248%, 31.62384%, 77.845764%)" offset="0.496094" />
            <stop stopOpacity="1" stopColor="rgb(25.978088%, 31.550598%, 77.761841%)" offset="0.5" />
            <stop stopOpacity="1" stopColor="rgb(25.613403%, 31.47583%, 77.676392%)" offset="0.503906" />
            <stop stopOpacity="1" stopColor="rgb(25.248718%, 31.402588%, 77.592468%)" offset="0.507812" />
            <stop stopOpacity="1" stopColor="rgb(24.884033%, 31.329346%, 77.507019%)" offset="0.511719" />
            <stop stopOpacity="1" stopColor="rgb(24.519348%, 31.256104%, 77.423096%)" offset="0.515625" />
            <stop stopOpacity="1" stopColor="rgb(24.154663%, 31.181335%, 77.337646%)" offset="0.519531" />
            <stop stopOpacity="1" stopColor="rgb(23.791504%, 31.108093%, 77.253723%)" offset="0.523437" />
            <stop stopOpacity="1" stopColor="rgb(23.426819%, 31.033325%, 77.168274%)" offset="0.527344" />
            <stop stopOpacity="1" stopColor="rgb(23.062134%, 30.960083%, 77.084351%)" offset="0.53125" />
            <stop stopOpacity="1" stopColor="rgb(22.697449%, 30.886841%, 77.000427%)" offset="0.535156" />
            <stop stopOpacity="1" stopColor="rgb(22.332764%, 30.813599%, 76.916504%)" offset="0.539062" />
            <stop stopOpacity="1" stopColor="rgb(21.968079%, 30.738831%, 76.831055%)" offset="0.542969" />
            <stop stopOpacity="1" stopColor="rgb(21.604919%, 30.665588%, 76.747131%)" offset="0.546875" />
            <stop stopOpacity="1" stopColor="rgb(21.240234%, 30.59082%, 76.661682%)" offset="0.550781" />
            <stop stopOpacity="1" stopColor="rgb(20.875549%, 30.517578%, 76.577759%)" offset="0.554687" />
            <stop stopOpacity="1" stopColor="rgb(20.510864%, 30.444336%, 76.49231%)" offset="0.558594" />
            <stop stopOpacity="1" stopColor="rgb(20.146179%, 30.371094%, 76.408386%)" offset="0.5625" />
            <stop stopOpacity="1" stopColor="rgb(19.781494%, 30.296326%, 76.322937%)" offset="0.566406" />
            <stop stopOpacity="1" stopColor="rgb(19.418335%, 30.223083%, 76.239014%)" offset="0.570312" />
            <stop stopOpacity="1" stopColor="rgb(19.05365%, 30.149841%, 76.15509%)" offset="0.574219" />
            <stop stopOpacity="1" stopColor="rgb(18.688965%, 30.076599%, 76.071167%)" offset="0.578125" />
            <stop stopOpacity="1" stopColor="rgb(18.32428%, 30.001831%, 75.985718%)" offset="0.582031" />
            <stop stopOpacity="1" stopColor="rgb(17.959595%, 29.928589%, 75.901794%)" offset="0.585938" />
            <stop stopOpacity="1" stopColor="rgb(17.59491%, 29.853821%, 75.816345%)" offset="0.589844" />
            <stop stopOpacity="1" stopColor="rgb(17.23175%, 29.780579%, 75.732422%)" offset="0.59375" />
            <stop stopOpacity="1" stopColor="rgb(16.867065%, 29.707336%, 75.646973%)" offset="0.597656" />
            <stop stopOpacity="1" stopColor="rgb(16.50238%, 29.634094%, 75.563049%)" offset="0.601562" />
            <stop stopOpacity="1" stopColor="rgb(16.137695%, 29.559326%, 75.4776%)" offset="0.605469" />
            <stop stopOpacity="1" stopColor="rgb(15.77301%, 29.486084%, 75.393677%)" offset="0.609375" />
            <stop stopOpacity="1" stopColor="rgb(15.408325%, 29.411316%, 75.309753%)" offset="0.613281" />
            <stop stopOpacity="1" stopColor="rgb(15.045166%, 29.338074%, 75.22583%)" offset="0.617188" />
            <stop stopOpacity="1" stopColor="rgb(14.680481%, 29.264832%, 75.140381%)" offset="0.621094" />
            <stop stopOpacity="1" stopColor="rgb(14.315796%, 29.191589%, 75.056458%)" offset="0.625" />
            <stop stopOpacity="1" stopColor="rgb(13.951111%, 29.116821%, 74.971008%)" offset="0.628906" />
            <stop stopOpacity="1" stopColor="rgb(13.586426%, 29.043579%, 74.887085%)" offset="0.632812" />
            <stop stopOpacity="1" stopColor="rgb(13.221741%, 28.968811%, 74.801636%)" offset="0.636719" />
            <stop stopOpacity="1" stopColor="rgb(12.858582%, 28.895569%, 74.717712%)" offset="0.640625" />
            <stop stopOpacity="1" stopColor="rgb(12.493896%, 28.822327%, 74.632263%)" offset="0.644531" />
            <stop stopOpacity="1" stopColor="rgb(12.129211%, 28.749084%, 74.54834%)" offset="0.648438" />
            <stop stopOpacity="1" stopColor="rgb(11.764526%, 28.674316%, 74.464417%)" offset="0.652344" />
            <stop stopOpacity="1" stopColor="rgb(11.401367%, 28.601074%, 74.380493%)" offset="0.65625" />
            <stop stopOpacity="1" stopColor="rgb(11.036682%, 28.527832%, 74.295044%)" offset="0.660156" />
            <stop stopOpacity="1" stopColor="rgb(10.671997%, 28.45459%, 74.211121%)" offset="0.664062" />
            <stop stopOpacity="1" stopColor="rgb(10.307312%, 28.379822%, 74.125671%)" offset="0.667969" />
            <stop stopOpacity="1" stopColor="rgb(9.942627%, 28.30658%, 74.041748%)" offset="0.671875" />
            <stop stopOpacity="1" stopColor="rgb(9.577942%, 28.231812%, 73.956299%)" offset="0.675781" />
            <stop stopOpacity="1" stopColor="rgb(9.214783%, 28.158569%, 73.872375%)" offset="0.679688" />
            <stop stopOpacity="1" stopColor="rgb(8.850098%, 28.085327%, 73.786926%)" offset="0.683594" />
            <stop stopOpacity="1" stopColor="rgb(8.485413%, 28.012085%, 73.703003%)" offset="0.6875" />
            <stop stopOpacity="1" stopColor="rgb(8.120728%, 27.937317%, 73.61908%)" offset="0.691406" />
            <stop stopOpacity="1" stopColor="rgb(7.756042%, 27.864075%, 73.535156%)" offset="0.695312" />
            <stop stopOpacity="1" stopColor="rgb(7.391357%, 27.789307%, 73.449707%)" offset="0.699219" />
            <stop stopOpacity="1" stopColor="rgb(7.028198%, 27.716064%, 73.365784%)" offset="0.703125" />
            <stop stopOpacity="1" stopColor="rgb(6.663513%, 27.642822%, 73.280334%)" offset="0.707031" />
            <stop stopOpacity="1" stopColor="rgb(6.298828%, 27.56958%, 73.196411%)" offset="0.710938" />
            <stop stopOpacity="1" stopColor="rgb(5.934143%, 27.494812%, 73.110962%)" offset="0.714844" />
            <stop stopOpacity="1" stopColor="rgb(5.569458%, 27.42157%, 73.027039%)" offset="0.71875" />
            <stop stopOpacity="1" stopColor="rgb(5.204773%, 27.346802%, 72.941589%)" offset="0.722656" />
            <stop stopOpacity="1" stopColor="rgb(4.841614%, 27.27356%, 72.857666%)" offset="0.726562" />
            <stop stopOpacity="1" stopColor="rgb(4.476929%, 27.200317%, 72.773743%)" offset="0.730469" />
            <stop stopOpacity="1" stopColor="rgb(4.112244%, 27.127075%, 72.689819%)" offset="0.734375" />
            <stop stopOpacity="1" stopColor="rgb(3.747559%, 27.052307%, 72.60437%)" offset="0.738281" />
            <stop stopOpacity="1" stopColor="rgb(3.382874%, 26.979065%, 72.520447%)" offset="0.742188" />
            <stop stopOpacity="1" stopColor="rgb(3.018188%, 26.904297%, 72.434998%)" offset="0.746094" />
            <stop stopOpacity="1" stopColor="rgb(2.655029%, 26.831055%, 72.351074%)" offset="0.75" />
            <stop stopOpacity="1" stopColor="rgb(2.326965%, 26.765442%, 72.27478%)" offset="0.753906" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.757812" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.765625" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.78125" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.8125" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.875" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="1" />
          </linearGradient>
          <clipPath id="b9369f2f1b">
            <path d="M 133 193 L 513 193 L 513 565.894531 L 133 565.894531 Z M 133 193 " clipRule="nonzero" />
          </clipPath>
          <clipPath id="0d512e33e3">
            <path
              d="M 133.710938 381.777344 L 512.835938 565.839844 L 512.324219 377.804688 L 133.710938 193.992188 Z M 133.710938 381.777344 "
              clipRule="nonzero"
            />
          </clipPath>
          <linearGradient
            x1="274.434984"
            gradientTransform="matrix(1.515778, 0, 0, 1.514718, 133.709768, 10.144595)"
            y1="317.093423"
            x2="-24.314875"
            gradientUnits="userSpaceOnUse"
            y2="171.146229"
            id="123d0c7df1"
          >
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.0625" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.09375" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.109375" />
            <stop stopOpacity="1" stopColor="rgb(79.598999%, 42.399597%, 90.19928%)" offset="0.117188" />
            <stop stopOpacity="1" stopColor="rgb(79.187012%, 42.315674%, 90.103149%)" offset="0.121094" />
            <stop stopOpacity="1" stopColor="rgb(78.77655%, 42.233276%, 90.008545%)" offset="0.125" />
            <stop stopOpacity="1" stopColor="rgb(78.358459%, 42.147827%, 89.910889%)" offset="0.128906" />
            <stop stopOpacity="1" stopColor="rgb(77.941895%, 42.063904%, 89.814758%)" offset="0.132812" />
            <stop stopOpacity="1" stopColor="rgb(77.523804%, 41.978455%, 89.717102%)" offset="0.136719" />
            <stop stopOpacity="1" stopColor="rgb(77.105713%, 41.894531%, 89.620972%)" offset="0.140625" />
            <stop stopOpacity="1" stopColor="rgb(76.687622%, 41.810608%, 89.523315%)" offset="0.144531" />
            <stop stopOpacity="1" stopColor="rgb(76.271057%, 41.726685%, 89.427185%)" offset="0.148438" />
            <stop stopOpacity="1" stopColor="rgb(75.852966%, 41.641235%, 89.329529%)" offset="0.152344" />
            <stop stopOpacity="1" stopColor="rgb(75.436401%, 41.557312%, 89.233398%)" offset="0.15625" />
            <stop stopOpacity="1" stopColor="rgb(75.018311%, 41.471863%, 89.135742%)" offset="0.160156" />
            <stop stopOpacity="1" stopColor="rgb(74.601746%, 41.387939%, 89.039612%)" offset="0.164062" />
            <stop stopOpacity="1" stopColor="rgb(74.183655%, 41.30249%, 88.941956%)" offset="0.167969" />
            <stop stopOpacity="1" stopColor="rgb(73.76709%, 41.218567%, 88.845825%)" offset="0.171875" />
            <stop stopOpacity="1" stopColor="rgb(73.348999%, 41.134644%, 88.748169%)" offset="0.175781" />
            <stop stopOpacity="1" stopColor="rgb(72.932434%, 41.05072%, 88.652039%)" offset="0.179688" />
            <stop stopOpacity="1" stopColor="rgb(72.514343%, 40.965271%, 88.555908%)" offset="0.183594" />
            <stop stopOpacity="1" stopColor="rgb(72.096252%, 40.881348%, 88.459778%)" offset="0.1875" />
            <stop stopOpacity="1" stopColor="rgb(71.678162%, 40.795898%, 88.362122%)" offset="0.191406" />
            <stop stopOpacity="1" stopColor="rgb(71.261597%, 40.711975%, 88.265991%)" offset="0.195312" />
            <stop stopOpacity="1" stopColor="rgb(70.843506%, 40.628052%, 88.168335%)" offset="0.199219" />
            <stop stopOpacity="1" stopColor="rgb(70.426941%, 40.544128%, 88.072205%)" offset="0.203125" />
            <stop stopOpacity="1" stopColor="rgb(70.00885%, 40.458679%, 87.974548%)" offset="0.207031" />
            <stop stopOpacity="1" stopColor="rgb(69.592285%, 40.374756%, 87.878418%)" offset="0.210938" />
            <stop stopOpacity="1" stopColor="rgb(69.174194%, 40.289307%, 87.780762%)" offset="0.214844" />
            <stop stopOpacity="1" stopColor="rgb(68.757629%, 40.205383%, 87.684631%)" offset="0.21875" />
            <stop stopOpacity="1" stopColor="rgb(68.339539%, 40.12146%, 87.586975%)" offset="0.222656" />
            <stop stopOpacity="1" stopColor="rgb(67.922974%, 40.037537%, 87.490845%)" offset="0.226562" />
            <stop stopOpacity="1" stopColor="rgb(67.504883%, 39.952087%, 87.393188%)" offset="0.230469" />
            <stop stopOpacity="1" stopColor="rgb(67.088318%, 39.868164%, 87.297058%)" offset="0.234375" />
            <stop stopOpacity="1" stopColor="rgb(66.670227%, 39.782715%, 87.199402%)" offset="0.238281" />
            <stop stopOpacity="1" stopColor="rgb(66.252136%, 39.698792%, 87.103271%)" offset="0.242188" />
            <stop stopOpacity="1" stopColor="rgb(65.834045%, 39.613342%, 87.005615%)" offset="0.246094" />
            <stop stopOpacity="1" stopColor="rgb(65.41748%, 39.529419%, 86.909485%)" offset="0.25" />
            <stop stopOpacity="1" stopColor="rgb(64.99939%, 39.445496%, 86.811829%)" offset="0.253906" />
            <stop stopOpacity="1" stopColor="rgb(64.582825%, 39.361572%, 86.715698%)" offset="0.257812" />
            <stop stopOpacity="1" stopColor="rgb(64.164734%, 39.276123%, 86.618042%)" offset="0.261719" />
            <stop stopOpacity="1" stopColor="rgb(63.748169%, 39.1922%, 86.521912%)" offset="0.265625" />
            <stop stopOpacity="1" stopColor="rgb(63.330078%, 39.10675%, 86.424255%)" offset="0.269531" />
            <stop stopOpacity="1" stopColor="rgb(62.913513%, 39.022827%, 86.328125%)" offset="0.273438" />
            <stop stopOpacity="1" stopColor="rgb(62.495422%, 38.938904%, 86.230469%)" offset="0.277344" />
            <stop stopOpacity="1" stopColor="rgb(62.078857%, 38.85498%, 86.134338%)" offset="0.28125" />
            <stop stopOpacity="1" stopColor="rgb(61.660767%, 38.769531%, 86.038208%)" offset="0.285156" />
            <stop stopOpacity="1" stopColor="rgb(61.242676%, 38.685608%, 85.942078%)" offset="0.289062" />
            <stop stopOpacity="1" stopColor="rgb(60.824585%, 38.600159%, 85.844421%)" offset="0.292969" />
            <stop stopOpacity="1" stopColor="rgb(60.40802%, 38.516235%, 85.748291%)" offset="0.296875" />
            <stop stopOpacity="1" stopColor="rgb(59.989929%, 38.432312%, 85.650635%)" offset="0.300781" />
            <stop stopOpacity="1" stopColor="rgb(59.573364%, 38.348389%, 85.554504%)" offset="0.304688" />
            <stop stopOpacity="1" stopColor="rgb(59.155273%, 38.262939%, 85.456848%)" offset="0.308594" />
            <stop stopOpacity="1" stopColor="rgb(58.738708%, 38.179016%, 85.360718%)" offset="0.3125" />
            <stop stopOpacity="1" stopColor="rgb(58.320618%, 38.093567%, 85.263062%)" offset="0.316406" />
            <stop stopOpacity="1" stopColor="rgb(57.904053%, 38.009644%, 85.166931%)" offset="0.320312" />
            <stop stopOpacity="1" stopColor="rgb(57.485962%, 37.924194%, 85.069275%)" offset="0.324219" />
            <stop stopOpacity="1" stopColor="rgb(57.069397%, 37.840271%, 84.973145%)" offset="0.328125" />
            <stop stopOpacity="1" stopColor="rgb(56.651306%, 37.756348%, 84.875488%)" offset="0.332031" />
            <stop stopOpacity="1" stopColor="rgb(56.233215%, 37.672424%, 84.779358%)" offset="0.335938" />
            <stop stopOpacity="1" stopColor="rgb(55.815125%, 37.586975%, 84.681702%)" offset="0.339844" />
            <stop stopOpacity="1" stopColor="rgb(55.39856%, 37.503052%, 84.585571%)" offset="0.34375" />
            <stop stopOpacity="1" stopColor="rgb(54.980469%, 37.417603%, 84.487915%)" offset="0.347656" />
            <stop stopOpacity="1" stopColor="rgb(54.563904%, 37.333679%, 84.391785%)" offset="0.351563" />
            <stop stopOpacity="1" stopColor="rgb(54.145813%, 37.249756%, 84.294128%)" offset="0.355469" />
            <stop stopOpacity="1" stopColor="rgb(53.729248%, 37.165833%, 84.197998%)" offset="0.359375" />
            <stop stopOpacity="1" stopColor="rgb(53.311157%, 37.080383%, 84.100342%)" offset="0.363281" />
            <stop stopOpacity="1" stopColor="rgb(52.894592%, 36.99646%, 84.004211%)" offset="0.367188" />
            <stop stopOpacity="1" stopColor="rgb(52.476501%, 36.911011%, 83.906555%)" offset="0.371094" />
            <stop stopOpacity="1" stopColor="rgb(52.059937%, 36.827087%, 83.810425%)" offset="0.375" />
            <stop stopOpacity="1" stopColor="rgb(51.641846%, 36.741638%, 83.714294%)" offset="0.378906" />
            <stop stopOpacity="1" stopColor="rgb(51.223755%, 36.657715%, 83.618164%)" offset="0.382812" />
            <stop stopOpacity="1" stopColor="rgb(50.805664%, 36.573792%, 83.520508%)" offset="0.386719" />
            <stop stopOpacity="1" stopColor="rgb(50.389099%, 36.489868%, 83.424377%)" offset="0.390625" />
            <stop stopOpacity="1" stopColor="rgb(49.971008%, 36.404419%, 83.326721%)" offset="0.394531" />
            <stop stopOpacity="1" stopColor="rgb(49.554443%, 36.320496%, 83.230591%)" offset="0.398437" />
            <stop stopOpacity="1" stopColor="rgb(49.136353%, 36.235046%, 83.132935%)" offset="0.402344" />
            <stop stopOpacity="1" stopColor="rgb(48.719788%, 36.151123%, 83.036804%)" offset="0.40625" />
            <stop stopOpacity="1" stopColor="rgb(48.301697%, 36.0672%, 82.939148%)" offset="0.410156" />
            <stop stopOpacity="1" stopColor="rgb(47.885132%, 35.983276%, 82.843018%)" offset="0.414062" />
            <stop stopOpacity="1" stopColor="rgb(47.467041%, 35.897827%, 82.745361%)" offset="0.417969" />
            <stop stopOpacity="1" stopColor="rgb(47.050476%, 35.813904%, 82.649231%)" offset="0.421875" />
            <stop stopOpacity="1" stopColor="rgb(46.632385%, 35.728455%, 82.551575%)" offset="0.425781" />
            <stop stopOpacity="1" stopColor="rgb(46.214294%, 35.644531%, 82.455444%)" offset="0.429688" />
            <stop stopOpacity="1" stopColor="rgb(45.796204%, 35.560608%, 82.357788%)" offset="0.433594" />
            <stop stopOpacity="1" stopColor="rgb(45.379639%, 35.476685%, 82.261658%)" offset="0.4375" />
            <stop stopOpacity="1" stopColor="rgb(44.961548%, 35.391235%, 82.164001%)" offset="0.441406" />
            <stop stopOpacity="1" stopColor="rgb(44.544983%, 35.307312%, 82.067871%)" offset="0.445312" />
            <stop stopOpacity="1" stopColor="rgb(44.126892%, 35.221863%, 81.970215%)" offset="0.449219" />
            <stop stopOpacity="1" stopColor="rgb(43.710327%, 35.137939%, 81.874084%)" offset="0.453125" />
            <stop stopOpacity="1" stopColor="rgb(43.292236%, 35.05249%, 81.776428%)" offset="0.457031" />
            <stop stopOpacity="1" stopColor="rgb(42.875671%, 34.968567%, 81.680298%)" offset="0.460938" />
            <stop stopOpacity="1" stopColor="rgb(42.457581%, 34.884644%, 81.582642%)" offset="0.464844" />
            <stop stopOpacity="1" stopColor="rgb(42.041016%, 34.80072%, 81.486511%)" offset="0.46875" />
            <stop stopOpacity="1" stopColor="rgb(41.622925%, 34.715271%, 81.390381%)" offset="0.472656" />
            <stop stopOpacity="1" stopColor="rgb(41.20636%, 34.631348%, 81.29425%)" offset="0.476562" />
            <stop stopOpacity="1" stopColor="rgb(40.788269%, 34.545898%, 81.196594%)" offset="0.480469" />
            <stop stopOpacity="1" stopColor="rgb(40.370178%, 34.461975%, 81.100464%)" offset="0.484375" />
            <stop stopOpacity="1" stopColor="rgb(39.952087%, 34.378052%, 81.002808%)" offset="0.488281" />
            <stop stopOpacity="1" stopColor="rgb(39.535522%, 34.294128%, 80.906677%)" offset="0.492188" />
            <stop stopOpacity="1" stopColor="rgb(39.117432%, 34.208679%, 80.809021%)" offset="0.496094" />
            <stop stopOpacity="1" stopColor="rgb(38.700867%, 34.124756%, 80.712891%)" offset="0.5" />
            <stop stopOpacity="1" stopColor="rgb(38.282776%, 34.039307%, 80.615234%)" offset="0.503906" />
            <stop stopOpacity="1" stopColor="rgb(37.866211%, 33.955383%, 80.519104%)" offset="0.507812" />
            <stop stopOpacity="1" stopColor="rgb(37.44812%, 33.87146%, 80.421448%)" offset="0.511719" />
            <stop stopOpacity="1" stopColor="rgb(37.031555%, 33.787537%, 80.325317%)" offset="0.515625" />
            <stop stopOpacity="1" stopColor="rgb(36.613464%, 33.702087%, 80.227661%)" offset="0.519531" />
            <stop stopOpacity="1" stopColor="rgb(36.196899%, 33.618164%, 80.131531%)" offset="0.523438" />
            <stop stopOpacity="1" stopColor="rgb(35.778809%, 33.532715%, 80.033875%)" offset="0.527344" />
            <stop stopOpacity="1" stopColor="rgb(35.360718%, 33.448792%, 79.937744%)" offset="0.53125" />
            <stop stopOpacity="1" stopColor="rgb(34.942627%, 33.363342%, 79.840088%)" offset="0.535156" />
            <stop stopOpacity="1" stopColor="rgb(34.526062%, 33.279419%, 79.743958%)" offset="0.539062" />
            <stop stopOpacity="1" stopColor="rgb(34.107971%, 33.195496%, 79.646301%)" offset="0.542969" />
            <stop stopOpacity="1" stopColor="rgb(33.691406%, 33.111572%, 79.550171%)" offset="0.546875" />
            <stop stopOpacity="1" stopColor="rgb(33.273315%, 33.026123%, 79.452515%)" offset="0.550781" />
            <stop stopOpacity="1" stopColor="rgb(32.85675%, 32.9422%, 79.356384%)" offset="0.554688" />
            <stop stopOpacity="1" stopColor="rgb(32.43866%, 32.85675%, 79.258728%)" offset="0.558594" />
            <stop stopOpacity="1" stopColor="rgb(32.022095%, 32.772827%, 79.162598%)" offset="0.5625" />
            <stop stopOpacity="1" stopColor="rgb(31.604004%, 32.688904%, 79.064941%)" offset="0.566406" />
            <stop stopOpacity="1" stopColor="rgb(31.187439%, 32.60498%, 78.968811%)" offset="0.570312" />
            <stop stopOpacity="1" stopColor="rgb(30.769348%, 32.519531%, 78.872681%)" offset="0.574219" />
            <stop stopOpacity="1" stopColor="rgb(30.351257%, 32.435608%, 78.77655%)" offset="0.578125" />
            <stop stopOpacity="1" stopColor="rgb(29.933167%, 32.350159%, 78.678894%)" offset="0.582031" />
            <stop stopOpacity="1" stopColor="rgb(29.516602%, 32.266235%, 78.582764%)" offset="0.585938" />
            <stop stopOpacity="1" stopColor="rgb(29.098511%, 32.182312%, 78.485107%)" offset="0.589844" />
            <stop stopOpacity="1" stopColor="rgb(28.681946%, 32.098389%, 78.388977%)" offset="0.59375" />
            <stop stopOpacity="1" stopColor="rgb(28.263855%, 32.012939%, 78.291321%)" offset="0.597656" />
            <stop stopOpacity="1" stopColor="rgb(27.84729%, 31.929016%, 78.19519%)" offset="0.601562" />
            <stop stopOpacity="1" stopColor="rgb(27.429199%, 31.843567%, 78.097534%)" offset="0.605469" />
            <stop stopOpacity="1" stopColor="rgb(27.012634%, 31.759644%, 78.001404%)" offset="0.609375" />
            <stop stopOpacity="1" stopColor="rgb(26.594543%, 31.674194%, 77.903748%)" offset="0.613281" />
            <stop stopOpacity="1" stopColor="rgb(26.177979%, 31.590271%, 77.807617%)" offset="0.617188" />
            <stop stopOpacity="1" stopColor="rgb(25.759888%, 31.506348%, 77.709961%)" offset="0.621094" />
            <stop stopOpacity="1" stopColor="rgb(25.341797%, 31.422424%, 77.613831%)" offset="0.625" />
            <stop stopOpacity="1" stopColor="rgb(24.923706%, 31.336975%, 77.516174%)" offset="0.628906" />
            <stop stopOpacity="1" stopColor="rgb(24.507141%, 31.253052%, 77.420044%)" offset="0.632812" />
            <stop stopOpacity="1" stopColor="rgb(24.08905%, 31.167603%, 77.322388%)" offset="0.636719" />
            <stop stopOpacity="1" stopColor="rgb(23.672485%, 31.083679%, 77.226257%)" offset="0.640625" />
            <stop stopOpacity="1" stopColor="rgb(23.254395%, 30.999756%, 77.128601%)" offset="0.644531" />
            <stop stopOpacity="1" stopColor="rgb(22.83783%, 30.915833%, 77.032471%)" offset="0.648438" />
            <stop stopOpacity="1" stopColor="rgb(22.419739%, 30.830383%, 76.934814%)" offset="0.652344" />
            <stop stopOpacity="1" stopColor="rgb(22.003174%, 30.74646%, 76.838684%)" offset="0.65625" />
            <stop stopOpacity="1" stopColor="rgb(21.585083%, 30.661011%, 76.741028%)" offset="0.660156" />
            <stop stopOpacity="1" stopColor="rgb(21.168518%, 30.577087%, 76.644897%)" offset="0.664062" />
            <stop stopOpacity="1" stopColor="rgb(20.750427%, 30.493164%, 76.548767%)" offset="0.667969" />
            <stop stopOpacity="1" stopColor="rgb(20.332336%, 30.409241%, 76.452637%)" offset="0.671875" />
            <stop stopOpacity="1" stopColor="rgb(19.914246%, 30.323792%, 76.35498%)" offset="0.675781" />
            <stop stopOpacity="1" stopColor="rgb(19.497681%, 30.239868%, 76.25885%)" offset="0.679688" />
            <stop stopOpacity="1" stopColor="rgb(19.07959%, 30.154419%, 76.161194%)" offset="0.683594" />
            <stop stopOpacity="1" stopColor="rgb(18.663025%, 30.070496%, 76.065063%)" offset="0.6875" />
            <stop stopOpacity="1" stopColor="rgb(18.244934%, 29.985046%, 75.967407%)" offset="0.691406" />
            <stop stopOpacity="1" stopColor="rgb(17.828369%, 29.901123%, 75.871277%)" offset="0.695313" />
            <stop stopOpacity="1" stopColor="rgb(17.410278%, 29.8172%, 75.773621%)" offset="0.699219" />
            <stop stopOpacity="1" stopColor="rgb(16.993713%, 29.733276%, 75.67749%)" offset="0.703125" />
            <stop stopOpacity="1" stopColor="rgb(16.575623%, 29.647827%, 75.579834%)" offset="0.707031" />
            <stop stopOpacity="1" stopColor="rgb(16.159058%, 29.563904%, 75.483704%)" offset="0.710938" />
            <stop stopOpacity="1" stopColor="rgb(15.740967%, 29.478455%, 75.386047%)" offset="0.714844" />
            <stop stopOpacity="1" stopColor="rgb(15.322876%, 29.394531%, 75.289917%)" offset="0.71875" />
            <stop stopOpacity="1" stopColor="rgb(14.904785%, 29.310608%, 75.192261%)" offset="0.722656" />
            <stop stopOpacity="1" stopColor="rgb(14.48822%, 29.226685%, 75.09613%)" offset="0.726563" />
            <stop stopOpacity="1" stopColor="rgb(14.070129%, 29.141235%, 74.998474%)" offset="0.730469" />
            <stop stopOpacity="1" stopColor="rgb(13.653564%, 29.057312%, 74.902344%)" offset="0.734375" />
            <stop stopOpacity="1" stopColor="rgb(13.235474%, 28.971863%, 74.804688%)" offset="0.738281" />
            <stop stopOpacity="1" stopColor="rgb(12.818909%, 28.887939%, 74.708557%)" offset="0.742188" />
            <stop stopOpacity="1" stopColor="rgb(12.400818%, 28.804016%, 74.610901%)" offset="0.746094" />
            <stop stopOpacity="1" stopColor="rgb(11.984253%, 28.720093%, 74.514771%)" offset="0.75" />
            <stop stopOpacity="1" stopColor="rgb(11.566162%, 28.634644%, 74.417114%)" offset="0.753906" />
            <stop stopOpacity="1" stopColor="rgb(11.149597%, 28.55072%, 74.320984%)" offset="0.757812" />
            <stop stopOpacity="1" stopColor="rgb(10.731506%, 28.465271%, 74.224854%)" offset="0.761719" />
            <stop stopOpacity="1" stopColor="rgb(10.314941%, 28.381348%, 74.128723%)" offset="0.765625" />
            <stop stopOpacity="1" stopColor="rgb(9.896851%, 28.295898%, 74.031067%)" offset="0.769531" />
            <stop stopOpacity="1" stopColor="rgb(9.47876%, 28.211975%, 73.934937%)" offset="0.773437" />
            <stop stopOpacity="1" stopColor="rgb(9.060669%, 28.128052%, 73.83728%)" offset="0.777344" />
            <stop stopOpacity="1" stopColor="rgb(8.644104%, 28.044128%, 73.74115%)" offset="0.78125" />
            <stop stopOpacity="1" stopColor="rgb(8.226013%, 27.958679%, 73.643494%)" offset="0.785156" />
            <stop stopOpacity="1" stopColor="rgb(7.809448%, 27.874756%, 73.547363%)" offset="0.789062" />
            <stop stopOpacity="1" stopColor="rgb(7.391357%, 27.789307%, 73.449707%)" offset="0.792969" />
            <stop stopOpacity="1" stopColor="rgb(6.974792%, 27.705383%, 73.353577%)" offset="0.796875" />
            <stop stopOpacity="1" stopColor="rgb(6.556702%, 27.62146%, 73.25592%)" offset="0.800781" />
            <stop stopOpacity="1" stopColor="rgb(6.140137%, 27.537537%, 73.15979%)" offset="0.804687" />
            <stop stopOpacity="1" stopColor="rgb(5.722046%, 27.452087%, 73.062134%)" offset="0.808594" />
            <stop stopOpacity="1" stopColor="rgb(5.305481%, 27.368164%, 72.966003%)" offset="0.8125" />
            <stop stopOpacity="1" stopColor="rgb(4.88739%, 27.282715%, 72.868347%)" offset="0.816406" />
            <stop stopOpacity="1" stopColor="rgb(4.469299%, 27.198792%, 72.772217%)" offset="0.820312" />
            <stop stopOpacity="1" stopColor="rgb(4.051208%, 27.113342%, 72.674561%)" offset="0.824219" />
            <stop stopOpacity="1" stopColor="rgb(3.634644%, 27.029419%, 72.57843%)" offset="0.828125" />
            <stop stopOpacity="1" stopColor="rgb(3.216553%, 26.945496%, 72.480774%)" offset="0.832031" />
            <stop stopOpacity="1" stopColor="rgb(2.799988%, 26.861572%, 72.384644%)" offset="0.835938" />
            <stop stopOpacity="1" stopColor="rgb(2.398682%, 26.780701%, 72.291565%)" offset="0.839844" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.84375" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="0.875" />
            <stop stopOpacity="1" stopColor="rgb(1.998901%, 26.699829%, 72.198486%)" offset="1" />
          </linearGradient>
        </defs>
        <g clipPath="url(#3b179a9b96)">
          <g clipPath="url(#3aec070272)">
            <path
              fill="url(#c3b9a88bb7)"
              d="M 133.710938 10.144531 L 133.710938 381.992188 L 705.722656 381.992188 L 705.722656 10.144531 Z M 133.710938 10.144531 "
              fillRule="nonzero"
            />
          </g>
        </g>
        <g clipPath="url(#0e9c71b8ba)">
          <g clipPath="url(#76a779532c)">
            <path
              fill="url(#7c33f24999)"
              d="M 511.808594 10.144531 L 511.808594 381.992188 L 890.9375 381.992188 L 890.9375 10.144531 Z M 511.808594 10.144531 "
              fillRule="nonzero"
            />
          </g>
        </g>
        <g clipPath="url(#6b8112fd36)">
          <g clipPath="url(#0437d5795f)">
            <path
              fill="url(#55093fc66a)"
              d="M 318.925781 193.992188 L 318.925781 565.839844 L 890.9375 565.839844 L 890.9375 193.992188 Z M 318.925781 193.992188 "
              fillRule="nonzero"
            />
          </g>
        </g>
        <g clipPath="url(#b9369f2f1b)">
          <g clipPath="url(#0d512e33e3)">
            <path
              fill="url(#123d0c7df1)"
              d="M 133.710938 193.992188 L 133.710938 565.839844 L 512.835938 565.839844 L 512.835938 193.992188 Z M 133.710938 193.992188 "
              fillRule="nonzero"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}

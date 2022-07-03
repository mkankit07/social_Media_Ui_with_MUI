// import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import React from 'react'
// import { Favorite, FavoriteBorder } from '@mui/icons-material';

// export const Post = () => {
//   return (
//     < >
//        <Card sx={{marginTop:3}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
//           A
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="20%"
//         image="https://images.pexels.com/photos/10756534/pexels-photo-10756534.jpeg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">

//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//       </CardActions>
//     </Card>
//     </>
//   )
// }
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { CardHeader, Checkbox } from '@mui/material';
import { Favorite } from '@mui/icons-material';

export const Post = () => {
  return (
    <Box  >
      <Card sx={{
        marginTop: 2,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }} variant="outlined" borderRadius="0"  >
        <CardHeader sx={{ paddingLeft: 0 }}
          avatar={
            <Avatar sx={{ bgcolor: "red" }} label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHoriz />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardOverflow>
          <AspectRatio>
            <img src="https://images.pexels.com/photos/10756534/pexels-photo-10756534.jpeg" alt="" />
          </AspectRatio>
        </CardOverflow>
        <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
          <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
            <IconButton variant="plain" color="neutral" size="sm">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>} />
            </IconButton>
            <IconButton variant="plain" color="neutral" size="sm">
              <ModeCommentOutlined />
            </IconButton>
            <IconButton variant="plain" color="neutral" size="sm">
              <SendOutlined />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: '50%',
                  width: `max(${6 - index}px, 3px)`,
                  height: `max(${6 - index}px, 3px)`,
                  bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
                }}
              />
            ))}
          </Box>
          <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
            <IconButton variant="plain" color="neutral" size="sm">
              <BookmarkBorderRoundedIcon />
            </IconButton>
          </Box>
        </Box>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
          8.1M Likes
        </Link>
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
            MUI
          </Link>{' '}
          The React component library you always wanted
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: 'text.tertiary' }}
        >
          more
        </Link>
        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: 'text.tertiary', my: 0.5 }}
        >
          2 DAYS AGO
        </Link>
        <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
          <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
            <Face />
          </IconButton>
          <Input
            variant="plain"
            size="sm"
            placeholder="Add a comment…"
            sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
          />
          <Link disabled underline="none" role="button">
            Post
          </Link>
        </CardOverflow>
      </Card>
    </Box>
  );
}


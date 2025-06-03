import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Item(props) {
    const { name, price } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h9"
                        component="div"
                        sx={{ color: "text.secondary" }}
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2">{price}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

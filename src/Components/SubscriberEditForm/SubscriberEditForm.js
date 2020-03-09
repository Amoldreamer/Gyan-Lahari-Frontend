import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';


import AddSubscriberResult from '../AddSubscriber/AddSubscriber';


const useStyles = makeStyles(theme => (
  {
    root: {
    },
    paper: {
      margin: theme.spacing(0, 0, 2, 0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    names: {
      margin: theme.spacing(0, 0, 0, 1),
    },
    bgColor: {
      flexGrow: 1,
      [theme.breakpoints.up('md')]: {
        padding:theme.spacing(15),},
      // backgroundColor: '#f0f5ce'
      background: 'linear-gradient(to right, #190A05, #870000)'
      
    },
    heading: {
      color: '#ffffff',
      [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    form: {
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function SubscriberEditForm(props) {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState('');
  const [userResult, setUserResult] = useState(null);
  const sD = props.subscriberDetails;
  const onSubmit = data => {
    setUser(data);
    console.log(data);
  };
  useEffect(() => {
    if (user !== '') {
      setUserResult(<AddSubscriberResult payload={user} />);
      setUser('');
    }
  }, [user]);

  const classes = useStyles();

  function RenderResult(props) {
    // conditionally render result
    if (props.result !== null) {
      return <>{userResult}</>
    }
    return (
      <Grid item alignItems="center" >

      <Typography variant="h2" component="h3"
        
        className={classes.heading} align="center">
        Edit Subscription Details
            </Typography>

      <Typography variant="h2" component="h3"
        className={classes.heading} align="center">
        सदस्यता विवरण सुधार
            </Typography>
    </Grid>
    );
  }

  return (
      <Grid
      container xs
      className={classes.bgColor}
      direction="row-reverse"
      justify="center"
      alignItems="center"
    >
      <Container maxWidth='xl' className={classes.paper}  >
        <CssBaseline>
          <>
            <RenderResult result={userResult} />
            <form onSubmit={handleSubmit(onSubmit)} >
              <React.Fragment>
                <Grid container spacing={3}
                  className={classes.form}
                  component={Paper} elevation={6}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  >
                  <Grid item xs={6} sm={4} lg={3}>
                    <TextField
                      inputRef={register}
                      required
                      type="number"
                      id="subStartVol"
                      name="subStartVol"
                      label="Starting Volume"
                      autoComplete="subStartVol"
                      defaultValue={sD.subStartVol}
                      />
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3}>
                    <NativeSelect
                      native
                      inputRef={register}
                      id="subSubscriptionType"
                      name="subSubscriptionType"
                      required
                      label="Subscription Type"
                      >
                      <option value={sD.subSubscriptionType}>{sD.subSubscriptionType} Year</option>
                      <option value={1}>1 Year</option>
                      <option value={3}>3 Years</option>
                      <option value={5}>5 Years</option>
                      <option value={10}>10 Years</option>
                    </NativeSelect>
                    <FormHelperText>Subscription Type</FormHelperText>

                  </Grid>
                  <Grid item xs={6} sm={4} lg={3}>
                    <TextField
                      inputRef={register}
                      required
                      id="subSlipNum"
                      name="subSlipNum"
                      label="Slip Number"
                      autoComplete="subSlipNum"
                      defaultValue={sD.subSlipNum}
                      />
                  </Grid>
                  <Grid item xs={6} sm={4} lg={3}>
                    <TextField
                      inputRef={register}
                      required
                      type="number"
                      id="subDistId"
                      name="subDistId"
                      label="Distributor Id"
                      autoComplete="subDistId"
                      defaultValue={sD.subDistId}
                      />
                  </Grid>
                    <Grid item xs={12} sm={4} >
                      <TextField
                        inputRef={register}
                        required
                        id="subName"
                        name="subName"
                        label="Name"
                        fullWidth
                        autoComplete="subName"
                        defaultValue={sD.subName}
                        />
                    </Grid>
                   
                  <Grid container
                    spacing={2}
                    className={classes.names}
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch" >

                    <Grid item xs={12} sm={4}>
                      <TextField
                        inputRef={register}
                        required
                        id="subAbout"
                        name="subAbout"
                        label="About"
                        fullWidth
                        autoComplete="subAbout"
                        defaultValue={sD.subAbout}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        inputRef={register}
                        required
                        id="subAdd1"
                        name="subAdd1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="subAdd1"
                        defaultValue={sD.subAdd1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        inputRef={register}
                        id="subAdd2"
                        name="subAdd2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="subAdd2"
                        defaultValue={sD.subAdd2}
                        />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      inputRef={register}
                      required
                      id="subPost"
                      name="subPost"
                      label="Post"
                      fullWidth
                      autoComplete="subPost"
                      defaultValue={sD.subPost}
                      />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      inputRef={register}
                      required
                      id="subCity"
                      name="subCity"
                      label="City"
                      fullWidth
                      autoComplete="subCity"
                      defaultValue={sD.subCity}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      inputRef={register}
                      required
                      id="subState"
                      name="subState"
                      label="State"
                      fullWidth
                      autoComplete="subState"
                      defaultValue={sD.subState}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      inputRef={register}
                      id="subPincode"
                      name="subPincode"
                      label="Postal code"
                      fullWidth
                      autoComplete="subPincode"
                      defaultValue={sD.subPincode}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      inputRef={register}
                      id="subPhone"
                      name="subPhone"
                      label="Phone"
                      fullWidth
                      autoComplete="subPhone"
                      defaultValue={sD.subPhone}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      inputRef={register}
                      id="subRemark"
                      name="subRemark"
                      label="Remark"
                      fullWidth
                      autoComplete="subRemark"
                      defaultValue={sD.subRemark}
                      />
                  </Grid>
                  <Grid container justify="center">

                  <Grid item xs={12} sm={6} >
                    <Button
                      type="submit"
                      name="updateSubscriber"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      >
                      Update Subscriber
                  </Button>
                      </Grid>
                  </Grid>
                </Grid>
              </React.Fragment>
            </form>
          </>
        </CssBaseline>
      </Container>
  </Grid>
  );
}
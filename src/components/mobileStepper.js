import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { Grid } from '@material-ui/core'
import { NoEncryption } from '@material-ui/icons'

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
  },

  img: {
    width: '100%',
    marginBottom: 0,
  },
  mainFeaturedPostContent: {
    position: 'absolute',
  },
  nextBtn: {
    position: 'absolute',
    right: '0px',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100%',
    color: 'red',
  },
  backBtn: {
    position: 'absolute',
    left: '0px',
    justifyItems: 'center',
    alignItems: 'center',
    height: '100%',
    color: 'red',
  },
}))

export default function TextMobileStepper() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = tutorialSteps.length

  const handleNext = () => {
    if (activeStep === 4) {
      setActiveStep(0)
    } else {
      setActiveStep(activeStep + 1)
    }
  }

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(4)
    } else {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <Button size="small" onClick={handleNext} className={classes.nextBtn}>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
      <Button size="small" onClick={handleBack} className={classes.backBtn}>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </Button>
    </div>
  )
}

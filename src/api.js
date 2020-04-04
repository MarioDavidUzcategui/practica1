const usersAPI = {
  users: [
    {
      id: 1,
      modelo: 'clasica1',
      imagen:
        'https://okdiario.com/img/2017/09/23/guitarras-clasicas-655x368.jpg',
      tipo: 'clasica'
    },
    {
      id: 2,
      modelo: 'acustica1',
      imagen:
        'https://www.elregalomusical.com/wp-content/uploads/2017/10/guitarra-acustica-martin-smith-barata-online.jpg',
      tipo: 'acustica'
    },
    {
      id: 3,
      modelo: 'Electrica1',
      imagen:
        'https://images-eu.ssl-images-amazon.com/images/I/41ymR%2BAAqML.jpg',
      tipo: 'electrica'
    },
    {
      id: 4,
      modelo: 'clasica2',
      imagen:
        'https://i.pinimg.com/originals/b3/9e/eb/b39eebf9144218063738ef056de5688c.jpg',
      tipo: 'clasica'
    },
    {
      id: 5,
      modelo: 'acustica2',
      imagen:
        'http://musicado.es/2143-large_default/guitarra-acustica-yamaha-apx500ii.jpg',
      tipo: 'acustica'
    },
    {
      id: 6,
      modelo: 'electrica2',
      imagen:
        'https://www.mrcdinstrumentos.com.mx/shared/productos/1792/0117702803.jpg',
      tipo: 'electrica'
    },
    {
      id: 7,
      modelo: 'clasica3',
      imagen:
        'https://i.pinimg.com/originals/b3/9e/eb/b39eebf9144218063738ef056de5688c.jpg',
      tipo: 'clasica'
    },
    {
      id: 8,
      modelo: 'acustica3',
      imagen:
        'http://www.topmusic.com.mx/12783-thickbox_default/guitarra-acustica-cutaway-41-cuerdas-metal.jpg',
      tipo: 'acustica'
    },
    {
      id: 9,
      modelo: 'electrica3',
      imagen:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMSFRUVEhAVEhUVEA8VFRUVFRUWFhUSFhUYHSggGBolHRUVITEhJSktLi4uFx8zODMsNyktLisBCgoKDg0OGBAQGC0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tNS0rLS0tKy43Lf/AABEIAL0BCwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwEFAAQGBwj/xAA6EAACAQIEAwYCCAUFAQAAAAABAgADEQQSITEFQVEGEyJhcYEykQcjQlJiobHBFJKi0eEWM3Ky8PH/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACgRAQEAAgICAQIFBQAAAAAAAAABAhEhMQMSQWHREyIyUYEEcaGx8P/aAAwDAQACEQMRAD8A62jT0jNvOKxWJSlTapUYKii7MdgJ5mO3OIbEtVple6uFTDuVBZdfEDybc322GugPTcptjJw9XQQlE47/AFiC4U3olTZ6VVQpzCxKknfcbcjLjAdpKdSqKeW1x8V9L75RpqPOOWUaXqrCvKvh/H6dV2RQQFYqGNgHYWuFHvz6GWJqjqIpZej1Z2yTeReQTH8kkTGBhIIcKCu453kqLRkAxU2EzKYkAw1lRJgN4DUheYIYMoJCgRbmG4MELAi7wSYToYPOSaWixvGuh/zBFOAATBMNhAEAxmiu+tvG1KR6fmIk0jJuzQ1S8gmTkkXtyMAk0785HcecZyiiYyA62iKovNm0TiFtJojXy6TTdNZY5Rbz9ZqOusnKHHL/AEo8RBNLChra97V10tsgP9R9hOAem9I96ChAYgG6kEcvCdbET1Dtj2do13DhbVWsGYEjNYWFxzNgBfynG8c4Q+HKU2cslioVqa3ym2bI4Fm52BsQCQBqZjcptpq6UmB4yULF8z3BygkFATvdTpb02sIfDeKqisHUPYN3aNTRqfive+xXckEdBoQLSeI4PvWBoUvDksMgtnyEg1ClyVJOntKlSWtYXOgAA/YRh6J9F2IUh0uSyWYAltiSM9hpfxW+U9DQkH/M8krucLTTCobVTlqYplNmz6mnRDA/YBufNvKXvBO11UWWsO8X7+gdQNSTyYAdbHzmvi/qMerP5Tl4cr+aPSadYcz+U2FMoOF8WpVxek4a241DD1U6j12lpRrcptxeYjmcVuCGBApt0jREaCo84QX/ANpBvCEZBNEecLLCvIj0TAokIJLGQsDFMmSLiOElBeC28IQTvACHp+kzJIJiGJ6xbB5QRdWqRtFd6YJMVo0M1Cd4siHBiMJNoD76xgi33gAkRcaYsxGgtEVdY68U8kFkTWcazcImu0VBnE8PexG4lNxLh3ejxG+tyGAtfqLDedFVFzNbEUrCYZzXMa43fFeWcawNSgXNNAc53ZSSpNwGSxFm1trfS2l4rs/2fqIy4hlAKFXRHBsxBuC21uvtPRq+EDCx2LKx01uu2sreIYJ2a6k26Xi3OletcdieE1GvVXNUuSz3HjuTckj7Xt8prMbKB9phr1C30W/mRfXoOs9N4VgLKMwAttbeDxXsrRr62yP99QAfcc4/wtzeI/F1dV5xhLhswYrluc63BW35idPwvto6n69Q68mWwcD9H/InrK3jPZ6th1sVLJe5qLqLDYEbj38ukrc2gJC2QW0AAc3JAY9bn5DykTK439mlkyes8P4pTrC9JwTYErezqD95Nx+ksaWIPOeJ4V2zZgWD3uCCQwJ5qRt7Tq8B2ydLCoveqNCym1T/AJfdf8jtc3nTj55f1MMvFZ09JRgY28pOG8UpVhem4JtcrcB1H4k3H6SzStN9b6ZddtgSTAR4V4yCzTFMh2mLJMRMiZeZCCmLFA3OghFok+sewdU0iJEyLYEILQ1gmIJMWWhmLYwCVMW8aDpFNAwkxRaNMURJoQYBh3i2iDDEER5iSIUN0CBVW8JBCcTLLlcV1ZbQEXWbddIpKcw1y2lQGtNyg15X1jaNw1SbYZaRljtZmlfec3xvsdSqgmme6bewHgJ6lZf060cHBmmscpyjnHp5PxDg9XD+GohF9AwuUI5kNyPK3n5TSFiBp8FyxBOZr2svTfS46z2SpSDAqwBB3BAIPtOV4x2MRgTQIQ3vkN8pPkfs8/nMcvFZ01nk324OnUJcEEhr3DKSpU9QRsP0E6rh3bJ1sKq94lgM40qepvox8tPWUGN4fUokrUUhjpe32fXnf9LxD1coDAAEDKtr6nXxnzF/+sWOdx6p5Yy9vVOH8Up1b924YjddmHW6nX3GnnLBMXPFsJWynvASpQixBt4reEA8tifQGdJwntdVW4rjOoHxAAPc7DkG/Xc30nRj55e2OXis6ek95eNUyh4VxanXF6b3tupBDL6qfQ67aby1SrNe5uM+ry2byQYrvBIFXpFvR6NMSTDNQRBeMjLSAZ519KNWrVAoAlUGVwt7LV0O58jsDpp6TzPCYurh3vSepRcHXIzIbjkwG/oZjfJq6Xrh9KqILTznsb9I/eFaGMKhjYJWACqx5LUA0Un7w08hz9CNWay76ReDTEmMzaRV9YGMRbRggEQASIto7lEvFQAxcYwipJiiiYbGLMQbwkNMBkX1kVUC6zMkYYWWRpatxSRVIaTfqpFd1C46OUJe0ZTcwHpxZYxS6PW28tYyc95pCpCFaXMkXFsYjDpUXK6hgeRF/l0nJ8a7G38VBr2vZG+dgefv5TqVqwxWlWY5dlu49PI8SjUqgQqVKEGzLoW0JNiNtAOmnnF12N7dCS2g1Y72Hlt8+s9cx2Bp1ltUUN0PNT1B5Ti+K9jnpXagTUAvlU2zKevnby520mWXiuP1aY+SXtzIqkEKhIKncEhs/OxHTYeh6zq+E9q6i2FQrVUEKTmtV2ual9mXfXyHnOTp4VgcoVs5JVVtZhp4j7D9fKAXyqOrfko/uRb2PWTjlcejyxlercO4xSri9NwSN1OjD1U//JvLWnkAciyrcNcG4Njm+yAfIH8/KdDw3tW66VPrEUfFs+ml787nr1E6MfNL+pjfHZ09ESpeCxlTwzi9KsL03ubXynRvl+40m81bSbTmcM7f3VPH1Sspp1FuOR2ZT1U8jPLuPcMK5wdWprmVubU76g+l7+WUz03H1BecX2wqBVduZp92PVydP5cx9px+S8t8ZNOAM9R+jTtZ3gGErt41H1DHd1A1pk82UDTqPTXy60JGKkEEgggggkEEaggjYy8MvWos3w+kRUhq08x7PfSSAoTGK1xp3yAEHzdNwfNb36CdH/r3h9r/AMR7dziL/LJOj3xrPVdcpkWnBY/6VMMlxRpVap5E2pJ8zdv6ZzOO+lPFsT3aUKY5eF3b5kgH+WZ3yRUj2JzFG08Mf6QOIk3/AIkjyFHDW/6TZwn0k45PjalVH46Sg/Onli/Eh+r2pYp2nC8G+lCg9lxFNqJP2lPeU/ewDD5GdphcSlVQ9N1dW2ZWBB9xKll6LpJqdYsmTXFonNJvAWMkSLTJMihLGxaRjRa1VFlZBWEIVpRQp0msyTeYRJWTpW2oyRZE3WWLZZGj214t6to5kM06oiNuUsTaba1gZUK0dTM1x8lRcR8T4PRrjxqL8nGjD35+84vjPZapSY1B9ao2yqcwsNFK9Nue07tasg1YXHHIt2PJCpUFtczXAPP8bH529z0h1XzMEAC3szAE2Xw3566C5Pqek9E4nwCjX8RGV/vgb/8AIfaE4vivZ6tQzEgvmNu8UctzfzJt8j1mWWFi5lK0y7Ic5BWwXuxfXxC6t8rt6nzl7gO09RPBV+sAW7HZl00H4uQ11ubXnNMQDfQpSHs7n9QSP5VkuQxVRcZgHqktc2te99N75rdWURY5WdHZL26Ti3aCmq5wlVxa91CADfRiTddt8pHS843G4mrjalgFAVXYLnVURQLs7uxAvYC7G3IC2glkxZWIbwMSS1jrTppyBHp/SOsbSx/cU+8pinTq13ChsoGWkGzNmBBWxOUE5bkdSIXK/wAp1qOVxuCqUmKVEZGH2WBB9R1HmNJrGd9Q7UU8TaljUp92AwJykqWNrOp+Klz1HXlOd7XcKpYeqoouWV1zqCUayGxR1dT4lOtrgHw87gxY53espql6qAwCYRMAyyCTIMkyIGi8y82U4fWZO9WlVNO5GcU3KXG4zWtNWASJa8A49Xwb56LWB+NDqjj8Q6+Y1m5w3A4JkDVnrKFQNUZDTuzFiMiq3Tw7Ak3J0AnPva5y3tc2vobciR1imQ0927NdpaeMp510IsKiG2ZD+4PIy3ss8C4Dxd8LWWqnLR1vo6c1P7HkbT23AYxa1NKtM3V1DKfXkfPlN8ct9s7NLq8G8hjIzSdqNUxjmKp9YV7nnJ+VMAvH00grYTGq9JUoE9ou0zWSthvKhBKwTTmwtpJWL1G2q1PSaVeh/wC1loy+k1qo8vzi9T2q2S0y5lgaPWa1ZJFx0qUtH0i+8F5zfa3iNXCZalM37xstmF1UKCbAC2+9z0mhw7tgtSwqAI/W9kPufh99POKUq72jUj2qraxsQdwec5ZeKEb6X5fvMfiYsSTYD4mJAUep2E099J9dqXt1To0SjIujPcqCALganz5D33nN0qquD4r5mLVWAtZRqFAPXXyuF6QO1HGBiKnh+BLhfO+7W5XsPlKRahBuDYjnMdb5VLp0VOiXIUaGoQT0WmLZVHQaD+VZr4/GXLOpIFjSpZXUWQDxZk+KzBvLcjWbtOhWXAticjMapyZgCclJQQar9ASCg0tYE9JSM6u3huUUWByoGyDUkgaE6mLDm36HW3w3Cd46oTlUgvWa6kLRQZnbyNg3uRK7i2PNeq1S2UMbKvJEUZUQeigD2lhiqvdYa+1TFHoBlw9Nug2z1F9xT85Qlo5zdpQTL/EdjMWqBxTz+Cm7Igc1EDglcylRmNhqELW52kdiuHLWxGer/sYdTXrnllTUL7mwt0vLBu3GLWq1XObVGZu6dSVVD8JRtxYaaaaXIMnK3esRJHHGDPR+KYjB4zD1Hq0mTE4dENZyVSqRoubOq5KrE2ADAHX7O883vHhlv40etOvTtFmoUaWcpTp0ghUMfiG7Zbjfe85XGVQzsyiwLEgRMyGOExvB3K2aZMBl32SSh3rNiFDqlMsqNfK7edtSPKRxylTI71FWndrKq2sRc8h5c/OHvN6HrdbU4M38NxSsihUqOqi9gGIGpufzJldDBlpfSZMEmYTIlwqaATGKsWkMPEaWU2NrE+e0YNBBAmWjgTeQsxmkJKI4GQzyVgwNBMWd4bNFX1jiawiC1OPUQXho9ua7VcNGIotTOh0KHow2PpuPQzx3E0mpsUdSrKbEHkZ7jjBrOY7Q8Cp4ixPhcDRxv6EfaEwt5XrcedYfidWkLJUqKOiu6j5AxGL4hUqf7lR3ttndmt6XOktuIdl8RT2TvF6prp5rv+so69Er8QKnowIPyMOC0DvJhaJaYpjJ1PZrtpWwhsVWrTsqlWADBVvlVagF7C5sDca6Wl4aHC8ZTzirVpVcxNWy01qZSxJZkAyMqg/EutgL3nnZgmZ3xze5xT23uM4/vqrOBlTRaSfcpIMtNPZQPcmaJMiXXY/ha4jEqtQgUad6tdiQAKaWuCT1JVfeVxjP7F2uMYn8Jw+lhrha2MK1697jJRH+zTPMXPi/mnPUmGYvYALqAVaohO60zfkdd+h3lz23/iBiq1TEU3TvHK0jvTNIaKqsNDoAbX66Sv4bhVqOqMfq1U1sSyu5HdIMxUroA4+AW51JOF/L7U2cQPc4anQGj1suIreSWIw9M+xZ7fjWbfBbLRs65ldmZhYWVF+019r2+QEqatR8XiLkeKtU2Gyjko8lUAegm/x6qqLkUqbkpdQQMqmxHn8KC531lSahVQHU+EHU+Ec9ToJu4rg1amuZlFhcmzKSAGK3IHK4OvvM4FgDiMRTpa2LXcjSyL4ma/oJfdscSqXSncZydMxNkB2F+puPnKDklcg3BIPlJqVSxuxvAkxBIhQRCgH0leQYJMjNNIVPU6QkMUTpGUzAzryCYlqszvIbAwISQFaGsYNvFloRMALCAOaCu8MrFiOFTu8iqlbSQV85BpxchoYl7zQqi5ljXE0Ko1mN7aRCLNTF0QTYi836QicSNZKlJW4RRY+KlTPqi/2ldj+yuHI0p5T1Usv5DSdNlkYhNBAnnOP7KMozUmzfhawPs205yohBIIII0IIsQZ66aOk5vtVwPvF7xB9Yo/mH3fXp8uej2VxcEYeHxDU2DIzKw2Kkg/lBvBlIdxw3t5nyU8fT75FJ8S6XupX62l8NQWJP7TS7T43Bohp4FbCsytVbOWHdpYogB1QFySVOvgHK05MzJE8WMu4e3Rdl8LZu9ddL216KM5sN2vZVtzudZT8UxRqVCSbgaA6a23aw01Nz7yaXEnVCgsAQRe3iF7XseWwEnhfDzWcLqFzIHItorG2l9L2vvppNCdL2Tw3cUHxDaNVuqaahAfEfcj+nznLcTxRq1GblsvoNp0XabiGWmtNBlBXKo5BRyB52FheclFsMkyJMAkQrQRGhCYw+iXaEiecUWhBpUI5rCEDEx1MR0xqRMIEwvbaQHgBKAJKmZngoIwZeBnhFhFO0IAtUMlTeQBDzwCbwSYQ1kOY6TWrGaNVNZZtTvFNQmdx2qVoAROIEshSEXVpzP1V7KvnMr7CbgowK9MGP1G2kBpNfF07ib60oquNJOjeW9q+G91UzgeF9T5Pufnv65ukoiZ6fxrBLWpsh000PQ8m9j+45zzPEUmRirCzKSCPMftHjfhOULkSZAlJYY3CYpqbZlPkRc2I6G0UZFow2MfjGqtmawsAABewE1pJkRBkmRCEAlFnovCeDKtFFZQWt4jbmTc/rOX7LcOzuKhHhU6ebf4npVHD+EekvFOS/EMRIMYIlDvH04hI8GMDWoZLGCkmVCrLCSokWkiBjEBzCi6kIKiwhmDeSBrGQu8tMZrwGEm0NhhguYVoFSIByzGEkTG2i0bXKSDRHSNAktDRNRqU1q9PSWNomqmkmxUrmq6amcr2t4JmHfUx4lHiA+0o5jzH6egnaYqnrEPTuPaZVfbx2ZOs4/wBnSSalEam5ZBz6svn5TlCLaH3vv6S5dos0GZMtMgSJkwzAIBgE3OG4Fqz5Rt9o9B/eO4Vwd6xv8Kc2I3/49Z2vDeGrTAVB/cnqYBtcFwIUBVFgBpOop0NBNfhuDyi5lhaXE0YEesMoJCJDWj2kCNUSbQjpHINsWDaZMVo4BqZgmXmJteUTBAOsO8UTJ6pitDvFAw2OkYiL6zGaKXc+kxmk7OGZ4DmAakwQ2RgMx9piiRUMAECSx0gqZLbQCBIqDSGIFQwNVYmlNQpvLVkmjWFgfeZ5RUqsqU5X8T7P0a+rLZvvro3vyPvLVhD5CSp5/i+x7g/V1FboGBU/MXmr/pPE9Kfr3n+J6I4/f9pFJP1/Qf31ke+UumuPiwuHtv8A7n7OBo9j6x+JqY9CWP7S2wXZemhBPjP4iLewnU5N/Ow9v/EyCtzby+Wh1iueUVh4cMr38b/19/8ADUo4QabdBLXAYYX094GHS9j53/K0sMCmrfK2u9yb6nzHylYZW2fVHk8eGMy1eZ99NpVtMg1HkTocj//Z',
      tipo: 'electrica'
    }
  ],
  all: function() {
    return this.users
  },
  get: function(id) {
    return this.users.find(u => u.id === id)
  },
  getFilteredGuitars: function(modelo) {
    return this.users.find(e => e.modelo === modelo)
  }
}

export default usersAPI

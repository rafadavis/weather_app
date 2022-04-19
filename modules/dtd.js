export const link = "https://downhilltodowntown.com/what-to-wear/";

export function downhillToDowntown ( w ) {
    const f = 51;
    var c = "";
    if (f > 90) {
        var c = t90
    } else if (f > 70) {
        var c = t70_89
    } else if (f > 60) {
        var c = t60_69
    } else if (f > 50) {
        var c = t50_59
    } else if (f > 40) {
        var c = t40_49
    } else if (f > 30) {
        var c = t30_39
    } else if (f > 20){
        var c = t20_29
    } else {
        var c = "No info"
    }
    return c;
}

const t20_29 = `It’s time to bring out your lightweight jackets! A base layer
and two long-sleeved tops will keep you warm. Add your lightweight jacket on
top of that to prevent yourself from feeling cold. You’ll also need thick
running pants. Alternatively, consider thermal leggings and wear your running
shorts/capris/track pant on top of it. Add your moisture-absorbent socks, warm
gloves/mittens, and a cap for your head, and you’re ready for your outdoor run! 

Even if you live somewhere where the temperature can go from crazy hot to
biting cold within the same year, you can keep up with your outdoor runs with
the right outfits. This is the complete list of clothes you need to run for any
temperature. As long as you dress accordingly and know what to wear, you can
knock out those runs and keep your training on schedule.`

const t30_39 = `This is when you’ll start to feel chilly on your runs. It’s
time to start layering! You’ll need at least two layers on top, running tights,
and wind/waterproof gloves. Add a third layer on top if you don’t like the
cold. A headband or beanie can keep your ears warm. Moisture-absorbent socks
are still necessary.`

const t40_49 = `This kind of temperature can be extremely pleasant for an
outdoor run. A long-sleeved pullover, shirt, shorts, and moisture-absorbent
socks will set you up for a great running experience. As the temperature falls
below 45°F, consider swapping out your shorts for leggings. Wear a hat or
beanie to keep your head warm. Consider gloves if your hands take a long time
to warm up. Follow this 10-minute warm-up to get your body ready to run in the
colder temps.`

const t50_59 = `This temperature range is ideal for most runners. Opt for your
favorite running shirt and a comfortable pair of running shorts. Don’t forget
your pullover. As temperatures begin to drop, you’ll want to wear a hat to help
keep your head warm.`

const t60_69 = `When the temperature begins to drop, that usually means runs
are getting longer and longer. You might still wear a shirt and shorts, but you
might also include a thin pullover. It’s a good idea to dress in layers if
needed because you can always take off the pullover and tie it around your
waist.`

const t70_89 = `This kind of temperature is still warm for most runners,
    especially if it’s muggy with humidity. Again, running gear that’s
    light-colored and wicks sweat is ideal. Shirts, singlets, and shorts will
    work in these temperatures. Wear reflective running gear and follow safety
    tips if you run in the early morning or evening.`

const t90 = `This kind of weather is extremely hot so ventilation is critical.
    Running in light-colored singlets and shorts is ideal. Some women run in
    their sports bra and some men run shirtless. Make sure you apply sunscreen!
    Moisture-wicking socks help keep your feet dry. You sweat a lot, so
    quick-drying material can wick away sweat without slowing you down. A hat
    and sunglasses are crucial too as they will protect your head and eyes from
    the sun’s rays`


module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
    //inserir dados na table de proffys
    const  insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID
    // Inserir dados na table classes

    const insertedClasses = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClasses.lastID

    //Inserir dados na table class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((Value) =>{
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${Value.weekday}",
                "${Value.time_from}",
                "${Value.time_to}"
            );
        `)
    })
    //Aqui vou executar todos os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}
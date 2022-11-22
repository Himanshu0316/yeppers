import React, { useState } from 'react'
import styles from "./main.module.css"
import { FaAngleDown, FaAngleRight, FaFile, FaFolder } from "react-icons/fa";
const Main = () => {
    const [open, setOpen] = useState(false);
    const [database, setDatabase] = useState(false);
    const [env, setEnv] = useState(false);
    const [docker, setDocker] = useState(false);
    const [lab, setLab] = useState(false);
    const [stac, setStac] = useState(false);
    const [temp, setTemp] = useState(false);
    const [users, setUsers] = useState(false);

    return (
        <div className={styles.Contain}>
            <div className={styles.Slider}>
                <div className={styles.Labler} onClick={() => setOpen(!open)}>
                    <div> {open ? <FaAngleDown /> : <FaAngleRight />}</div>
                    <div>
                        <FaFolder />
                    </div>

                    <div><p className={styles.Ptag}>labler_api</p></div>
                </div>
                <div className={open ? styles.openDiv : styles.closeDiv}>
                    <div className={styles.Lablein} onClick={() => setDatabase(!database)}>
                        <div> {database ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>datasets</p>
                    </div>
                    <div className={database ? styles.opendDiv : styles.closedDiv}>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>__init__.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>admin.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>apps.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>models.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>serializers.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>tests.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>view.py</p>
                        </div>


                    </div>
                    <div className={styles.Lablein} onClick={() => setDocker(!docker)}>
                        <div> {docker ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>docker-data</p>
                    </div>
                    <div className={docker ? styles.docDiv : styles.closedDiv}>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>mydata.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>myda.py</p>
                        </div>
                    </div>
                    <div className={styles.Lablein} onClick={() => setEnv(!env)}>
                        <div> {env ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>env</p>
                    </div>
                    <div className={env ? styles.envDiv : styles.closedDiv}>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>database.py</p>
                        </div>
                    </div>
                    <div className={styles.Lablein} onClick={() => setLab(!lab)} >
                        <div> {lab ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>lebeller_api</p>
                    </div>
                    <div className={lab ? styles.labsDiv : styles.closedDiv}>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>__init__.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>authentication.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>asgi.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>setting.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>urls.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>wsgi.py</p>
                        </div>
                    </div>
                    <div className={styles.Lablein} onClick={() => setStac(!stac)}>
                        <div> {stac ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>static</p>
                    </div>
                    <div className={stac ? styles.stacDiv : styles.closedDiv}>

                    </div>
                    <div className={styles.Lablein} onClick={() => setTemp(!temp)}>
                        <div> {temp ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>templates</p>
                    </div>
                    <div className={temp ? styles.tempDiv : styles.closedDiv}>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>__init__.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>temp.py</p>
                        </div>
                    </div>
                    <div className={styles.Lablein} onClick={() => setUsers(!users)}>
                        <div> {users ? <FaAngleDown /> : <FaAngleRight />}</div>
                        <div className={styles.folDer}>
                            <FaFolder />
                        </div>
                        <p className={styles.Ptag}>Users</p>
                    </div>
                    <div className={users ? styles.useDiv : styles.closedDiv}>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>__init__.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>admin.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>apps.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>models.py</p>
                        </div>
                        <div className={styles.fiLe}>
                            <FaFile />
                            <p className={styles.Ptag}>permission.py</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

<template>
<div>
    <div class="content-container">
        <div v-if="form">
            <div class="content-header">
                <label>
                    CREATE USER
                </label>
            </div>
            <div class="lower-content">
                <div class="title">
                    <div class="titleLabel">
                        Title:
                    </div>
                    <div class="titleValue">
                        <div class="mister">
                            <div class="input">
                                <input type="radio" name="title" id="mr">
                            </div>
                            <div class="label">
                                <label for="mr">
                                    Mr.
                                </label>
                            </div>
                        </div>
                        <div class="mises">
                            <div class="input">
                                <input type="radio" name="title" id="mrs">
                            </div>
                            <div class="label">
                                <label for="mrs">
                                    Mrs.
                                </label>
                            </div>
                        </div>
                        <div class="miss">
                            <div class="input">
                                <input type="radio" name="title" id="miss">
                            </div>
                            <div class="label">
                                <label for="miss">
                                    Miss.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="name">
                    <div class="firstName">
                        <div class="label">
                            <label for="firstName">
                                First Name:
                            </label>
                        </div>
                        <div class="input">
                            <input type="text" name="firstName" id="firstName" v-model="user.firstName">
                        </div>
                    </div>
                    <div class="lastName">
                        <div class="label">
                            <label for="lastName">
                                Last Name:
                            </label>
                        </div>
                        <div class="input">
                            <input type="text" name="lastName" id="lastName" v-model="user.lastName">
                        </div>
                    </div>
                </div>
                <div class="position">
                    <div class="concultant">
                        <div class="input">
                            <input type="radio" name="position" id="consultant">
                        </div>
                        <div class="label">
                            <label for="consultant">
                                Consultant
                            </label>
                        </div>
                    </div>
                    <div class="projectManager">
                        <div class="input">
                            <input type="radio" name="position" id="projectManager">
                        </div>
                        <div class="label">
                            <label for="projectManager">
                                Project Manager
                            </label>
                        </div>
                    </div>
                    <div class="developer">
                        <div class="input">
                            <input type="radio" name="position" id="developer">
                        </div>
                        <div class="label">
                            <label for="developer">
                                Developer
                            </label>
                        </div>
                    </div>
                </div>
                <div class="contact">
                    <div class="email">
                        <div class="label">
                            <label for="email">
                                Email Address:
                            </label>
                        </div>
                        <div class="input">
                            <input type="text" name="email" id="email" v-model="user.email">
                        </div>
                    </div>
                    <div class="phone">
                        <div class="label">
                            <label for="phone">
                                Phone Number:
                            </label>
                        </div>
                        <div class="input">
                            <input type="text" name="phone" id="phone" v-model="user.phone">
                        </div>
                    </div>
                </div>
                <div class="button">
                    <div class="add">
                        <button>
                            ADD USER
                        </button>
                    </div>
                    <div class="cancel">
                        <button>
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!form" class="details">
            <div class="title">
                <label>
                    VIEW USERS
                </label>
            </div>
            <div class = " center ">
                <div class="left">
                    <div class="top">
                        <label>
                            CONSULTANT
                        </label>
                    </div>
                    <div class="bottom">
                        <div class="search">
                            <input type="text" placeholder="search" v-model="searchWords.searchConsultant">
                        </div>
                        <div class="one"></div>
                        <div class=""></div>
                    </div>
                </div>
                <div class="middle">
                    <div class="top">
                        <label>
                            PROJECT MANAGER
                        </label>
                    </div>
                    <div class="bottom">
                        <div class="search">
                            <input type="text" placeholder="search" v-model="searchWords.searchProjectManager">
                        </div>
                        <div class="one"></div>
                        <div class=""></div>
                    </div>
                </div>
                <div class="right">
                    <div class="top">
                        <label>
                            DEVELOPER
                        </label>
                    </div>
                    <div class="bottom">
                        <div class="search">
                            <input type="text" placeholder="search" searchWords.searchDeveloper>
                        </div>
                        <div class="one"></div>
                        <div class="two"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Users",
        data() {
            return {
                form: false,
                searchWords: {
                    searchConsultant: '',
                    searchProjectManager: '',
                    searchDeveloper: '',

                },
                user: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                }
            }
        },
        created() {
        },
    }
</script>

<style scoped>

</style>

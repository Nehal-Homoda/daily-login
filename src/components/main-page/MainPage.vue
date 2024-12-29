<template>
    <div class="login" @click.self="handleCloseWindow">

        <div class="dialy-login-wrap">
            <span class="login-title">تسجيل الدخول اليومي</span>
            <div class="daily-gift-wrap">
                <div class="gift-wrap" v-for="(item, index) in 7" :class="{ 'second-gift-wrap': index == 6 }">
                    <div class="gift-img-wrap">
                        <img class="gift-img" src="@/assets/img/avatar.png" alt="">
                    </div>
                    <span>4 days</span>
                </div>
            </div>
            <span class="login-number">لقد قمت بتسجيل الدخول عدد 0 ايام</span>
            <button class="login-btn">دخول</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Accesser from '@/utilities/Accesser.js';

const handleCloseWindow = () => {
    console.log('hi')
    Accesser.closeWindow();
}
</script>

<style scoped lang="scss">
.login {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .dialy-login-wrap {
        width: 100%;
        height: 85vw;
        background: url('@/assets/img/login-bg.png') center no-repeat;
        background-size: contain;
        padding: 29% 10% 0% 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
        position: relative;

        .daily-gift-wrap {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 0.9em;

            .gift-wrap {
                width: 20.5%;
                height: 18vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: url('@/assets/img/gift-bg.png') center no-repeat;
                background-size: contain;
                font-size: 0.8em;
                color: white;
                flex-grow: 0;
                flex-shrink: 0;

                .gift-img-wrap {
                    width: 100%;
                    height: 67%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30% 15% 15% 15%;
                    box-sizing: border-box;

                    .gift-img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                &.second-gift-wrap {
                    width: 47%;
                    background: url('@/assets/img/last-gift.png') center no-repeat;
                    background-size: contain;

                    .gift-img-wrap {
                        padding: 8% 9% 6% 9%;
                        height: 76%;
                    }

                }




            }
        }

        .login-number {
            color: rgb(159, 106, 254);
            font-size: 0.9em;

        }

        .login-btn {
            width: 75%;
            height: 7vw;
            border: none;
            outline: none;
            background: linear-gradient(to right, rgb(159, 106, 254), rgb(123, 177, 252));
            color: white;
            font-weight: bold;
            border-top-right-radius: 3em;
            border-bottom-right-radius: 3em;
            border-top-left-radius: 3em;
            border-bottom-left-radius: 3em;
        }

        .login-title {
            position: absolute;
            top: 15%;
            left: 12%;
            color: rgb(159, 106, 254);
            font-weight: 600;
            font-size: 0.9em;

        }
    }
}
</style>
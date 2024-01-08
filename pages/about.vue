<template>
  <section class="page page__about">
    <div class="container">
      <h1>Serving Patients Across the US</h1>
      <h3>Here are all the states we currently deliver medications to:</h3>
      <ul>
        <li v-for="state in states">
          <img :src="state.flag">
          {{ state.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'about'
})


useHead({
  title: 'About Us'
})

const states = [{
  name: 'Alabama',
  flag: `http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg`
},
{
  name: 'Alaska',
  flag: `http://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg`
},
{
  name: 'Arizona',
  flag: `http://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg`
},
{
  name: 'Arkansas',
  flag: `http://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg`
},
{
  name: 'California',
  flag: `http://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg`
},
{
  name: 'Colorado',
  flag: `http://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg`
},
{
  name: 'Connecticut',
  flag: `http://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_Connecticut.svg`
},
{
  name: 'Delaware',
  flag: `http://upload.wikimedia.org/wikipedia/commons/c/c6/Flag_of_Delaware.svg`
},
{
  name: 'Florida',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg`
},
{
  name: 'Georgia',
  flag: `http://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg`
},
{
  name: 'Hawaii',
  flag: `http://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg`
},
{
  name: 'Idaho',
  flag: `http://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Idaho.svg`
},
{
  name: 'Illinois',
  flag: `http://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg`
},
{
  name: 'Indiana',
  flag: `http://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg`
},
{
  name: 'Iowa',
  flag: `http://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Iowa.svg`
},
{
  name: 'Kansas',
  flag: `http://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Kansas.svg`
},
{
  name: 'Kentucky',
  flag: `http://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Kentucky.svg`
},
{
  name: 'Louisiana',
  flag: `http://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg`
},
{
  name: 'Maine',
  flag: `http://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Maine.svg`
},
{
  name: 'Maryland',
  flag: `http://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg`
},
{
  name: 'Massachusetts',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg`
},
{
  name: 'Michigan',
  flag: `http://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Michigan.svg`
},
{
  name: 'Minnesota',
  flag: `http://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg`
},
{
  name: 'Mississippi',
  flag: `http://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg`
},
{
  name: 'Missouri',
  flag: `http://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Missouri.svg`
},
{
  name: 'Montana',
  flag: `http://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Montana.svg`
},
{
  name: 'Nebraska',
  flag: `http://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Nebraska.svg`
},
{
  name: 'Nevada',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Nevada.svg`
},
{
  name: 'New Hampshire',
  flag: `http://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_New_Hampshire.svg`
},
{
  name: 'New Jersey',
  flag: `http://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_New_Jersey.svg`
},
{
  name: 'New Mexico',
  flag: `http://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg`
},
{
  name: 'New York',
  flag: `http://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg`
},
{
  name: 'North Carolina',
  flag: `http://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg`
},
{
  name: 'North Dakota',
  flag: `http://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_North_Dakota.svg`
},
{
  name: 'Ohio',
  flag: `http://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg`
},
{
  name: 'Oklahoma',
  flag: `http://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg`
},
{
  name: 'Oregon',
  flag: `http://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Oregon.svg`
},
{
  name: 'Pennsylvania',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Pennsylvania.svg`
},
{
  name: 'Rhode Island',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg`
},
{
  name: 'South Carolina',
  flag: `http://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg`
},
{
  name: 'South Dakota',
  flag: `http://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_South_Dakota.svg`
},
{
  name: 'Tennessee',
  flag: `http://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg`
},
{
  name: 'Texas',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg`
},
{
  name: 'Utah',
  flag: `http://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg`
},
{
  name: 'Vermont',
  flag: `http://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Vermont.svg`
},
{
  name: 'Virginia',
  flag: `http://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg`
},
{
  name: 'Washington',
  flag: `http://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Washington.svg`
},
{
  name: 'West Virginia',
  flag: `http://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_West_Virginia.svg`
},
{
  name: 'Wisconsin',
  flag: `http://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Wisconsin.svg`
},
{
  name: 'Wyoming',
  flag: `http://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Wyoming.svg`
}]

</script>

<style lang="scss" scoped>
.page__about{
  padding-top: res(100, 130);
  padding-bottom: res(60, 120);
  color: var(--white);
  h1{
    margin-bottom: 32px;
  }
  h3{
    margin-bottom: res(60, 120);
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    li{
      display: flex;
      font-size: 16px;
      align-items: center;
      padding: 8px;
      margin-bottom: 8px;
      &:not(:first-child){
        margin-left: res(8, 16);
      }
    }
    img{
      width: 32px;
      margin-right: 8px;
    }
  }
}
</style>